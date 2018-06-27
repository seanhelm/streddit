from bs4 import BeautifulSoup
from configparser import ConfigParser
from datetime import datetime
from markdown import markdown
from praw import Reddit
from pymongo import MongoClient
from textblob import TextBlob


def remove_markdown(text):
    """
    Remove markdown syntax from text.

    Args:
        text: String of raw markdown text

    Returns:
        A processed string without any markdown syntax
    """
    html = markdown(text)
    return ''.join(BeautifulSoup(html, "html.parser").findAll(text=True))


def process_comment(comment, collection, max_polarity):
    """
    Process the entire comment by removing markdown syntax and performing sentiment
    analysis on the comment body.

    Args:
        comment: Entire comment information
    """
    body_plain = remove_markdown(comment.body)
    blob = TextBlob(body_plain)

    # If comment is suspicious
    if blob.sentiment[0] <= -0.2:
        # Extract necessary information from reddit comment
        other_keys = ['permalink', 'subreddit', 'link_title']
        comment_dict = {key: comment.__dict__[key] for key in other_keys}
        comment_dict.update(author=comment.author.name,
                            subreddit=comment.author.name,
                            created=datetime.utcfromtimestamp(comment.created_utc),
                            body=body_plain,
                            polarity=blob.sentiment[0])

        # Insert into database
        id = collection.insert_one(comment_dict).inserted_id
        print('\t%s: %s' % (id, comment_dict))


if __name__ == '__main__':
    config = ConfigParser()
    config.read('config.cfg')

    # Connect to MongoDB
    client = MongoClient(config['MONGODB']['Host'])
    db = client.streddit
    coll = db.comments

    # Generate PRAW instance
    reddit = Reddit(client_id=config['CREDENTIALS']['ClientID'],
                    client_secret=config['CREDENTIALS']['ClientSecret'],
                    user_agent=config['CREDENTIALS']['UserAgent'],
                    username=config['CREDENTIALS']['Username'],
                    password=config['CREDENTIALS']['Password'])

    # Consume comments stream
    subreddit = reddit.subreddit(config['REDDIT']['Subreddit'])
    print("Consuming Reddit stream from r/%s..." % subreddit)

    # S
    for comment in subreddit.stream.comments():
        process_comment(comment, coll, config['REDDIT']['MaxPolarity'])
