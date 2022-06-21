const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(function(paragraph, index) {
    // console.log(`Item is ${p.textContent} at Index ${index}`)
    if (paragraph.textContent.includes('the')) {
        paragraph.remove()
    }
})