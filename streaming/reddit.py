import praw
from bs4 import BeautifulSoup
from markdown import markdown
from configparser import ConfigParser


def remove_markdown(text):
    """
    Remove markdown syntax from text.

    Args:
        text: String of raw markdown text
    
    Returns:
        A processed string without any markdown syntax
    """
    html = markdown(text)
    return ''.join(BeautifulSoup(html).findAll(text=True))

def process_comment(comment):
    """
    Process the entire comment by removing markdown syntax and performing sentiment
    analysis on the comment body.

    Args:
        comment: Entire comment information
    """
    body_plain = remove_markdown(comment.body)
    print("'%s'\n" % (body_plain.replace('\n', ' ')))


if __name__ == '__main__':
    config = ConfigParser()
    config.read('config.cfg')

    # Generate PRAW instance
    reddit = praw.Reddit(client_id=config['CREDENTIALS']['ClientID'],
        client_secret=config['CREDENTIALS']['ClientSecret'],
        user_agent=config['CREDENTIALS']['UserAgent'],
        username=config['CREDENTIALS']['Username'],
        password=config['CREDENTIALS']['Password'])

    # Stream comments on r/politics
    subreddit = reddit.subreddit(config['REDDIT']['Subreddit'])
    for comment in subreddit.stream.comments():
        process_comment(comment)
