const contactController = (req, res) => {
 res.render('contact', { 'title': 'Contact' })  // showing title Dynamically  in title bar
}

export { contactController }