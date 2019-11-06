const cardContainer = document.querySelector("#display-container")
const DOMComponents = {
    makeCardComponent(element) {
        return `
        <section>
        <h1>${element.name}</h1>
        <p>Works in the ${element.department.department}.</p>
        <p>Currently using a ${element.computer.computer}.</p>
        </section>
        `
    },
    buildCardHtml(response) {
        let allCardsHtml = ""
        response.forEach(element => {
            const cardHtml = this.makeCardComponent(element)
            allCardsHtml += cardHtml
        });
        cardContainer.innerHTML = allCardsHtml
    }
}
export default DOMComponents