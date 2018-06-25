import praw
from configparser import ConfigParser

if __name__ == '__main__':
    config = ConfigParser()
    config.read('config.cfg')

    reddit = praw.Reddit(client_id=config['CREDENTIALS']['ClientID'],
        client_secret=config['CREDENTIALS']['ClientSecret'],
        user_agent=config['CREDENTIALS']['UserAgent'],
        username=config['CREDENTIALS']['Username'],
        password=config['CREDENTIALS']['Password'])

    subreddit = reddit.subreddit('all')
    for submission in subreddit.stream.submissions():
        print(submission.title)
