# Create a BlogPost class that has
# an authorName
# a title
# a text
# a publicationDate
# Create a few blog post objects:
# "Lorem Ipsum" titled by John Doe posted at "2000.05.04."
# Lorem ipsum dolor sit amet.
# "Wait but why" titled by Tim Urban posted at "2010.10.10."
# A popular long-form, stick-figure-illustrated blog about almost everything.
# "One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
# Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.

class BlogPost():
    authorName = ''
    title = ''
    text = ''
    publicationDate = ''

blogpost1 = BlogPost()
blogpost2 = BlogPost()
blogpost3 = BlogPost()

blogpost1.authorName = "John Doe"
blogpost1.title = "Lorem Ipsum"
blogpost1.text = 'Lorem ipsum dolor sit amet.'
blogpost1.publicationDate = "2000.05.04."

blogpost1.authorName = "Tim Urban"
blogpost1.title = "Wait but why"
blogpost1.text = 'A popular long-form, stick-figure-illustrated blog about almost everything.'
blogpost1.publicationDate = "2010.10.10."

blogpost1.authorName = "William Turton"
blogpost1.title = "One Engineer Is Trying to Get IBM to Reckon With Trump"
blogpost1.text = 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.'
blogpost1.publicationDate = "2017.03.28."


print(blogpost1.authorName + blogpost1.title + blogpost1.text + blogpost1.publicationDate)
