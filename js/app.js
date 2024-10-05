// I Didn't use database in this project .
// I store my data into an array
const listItems = [
    {id: 1, name: 'Amir', family: 'Mozaffari'},
    {id: 2, name: 'Amir', family: 'Moghasemi'},
    {id: 3, name: 'Amin', family: 'Shekari'},
    {id: 4, name: 'Babak', family: 'AliPour'},
    {id: 5, name: 'Hasan', family: ' Hossein Zadeh'},

    {id: 6, name: 'Amin', family: 'Davari'},
    {id: 7, name: 'Mohammad', family: 'Ghasemi'},
    {id: 8, name: 'James', family: 'Smith'},
    {id: 9, name: 'Johny', family: 'English'},
    {id: 10, name: 'Hossein', family: 'Ghasemi'},

    {id: 11, name: 'Saeed', family: 'Ehsani'},
    {id: 12, name: 'Ehsan', family: 'Amiri'},
    {id: 13, name: 'Mohsen', family: 'Ansari'},
    {id: 14, name: 'Mehran', family: 'Brumand'},
    {id: 15, name: 'Amir Hossein', family: 'Azari'},

    {id: 16, name: 'Hossein', family: 'Mohammadi'},
    {id: 17, name: 'Melika', family: 'Hosseini'},
    {id: 18, name: 'Nima', family: 'Ahmadi'},
    {id: 19, name: 'Fatemeh', family: 'Hessin abadi'},
    {id: 20, name: 'Ehsan', family: 'Tayyebi'},

    {id: 21, name: 'Zahra', family: 'Dehghani'},
    {id: 22, name: 'Matin', family: 'Gholami'},
    {id: 23, name: 'Nima', family: 'Ahmadi'},
    {id: 24, name: 'Fatemeh', family: 'Hessin abadi'},
    {id: 25, name: 'Ehsan', family: 'Tayyebi'},

    {id: 26, name: 'Saeed', family: 'Ehsani'},
    {id: 27, name: 'Ehsan', family: 'Amiri'},
    {id: 28, name: 'Mohsen', family: 'Ansari'},
    {id: 29, name: 'Mehran', family: 'Brumand'},
    {id: 30, name: 'Amir Hossein', family: 'Azari'},

    {id: 31, name: 'Hamid', family: 'Ehsani'},
    {id: 32, name: 'ALi', family: 'Amiri'},
    {id: 33, name: 'Sobhan', family: 'Ansari'},
    {id: 34, name: 'Sohrab', family: 'Brumand'},
    {id: 35, name: 'AmirAli', family: 'Azari'},

    {id: 36, name: 'Mohsen', family: 'Ehsani'},
    {id: 37, name: 'Soltan', family: 'Amiri'},
    {id: 38, name: 'Nastaran', family: 'Ansari'},
    {id: 39, name: 'Ghazal', family: 'Brumand'},
    {id: 40, name: 'Baran', family: 'Azari'},

    {id: 41, name: 'Ehsan', family: 'Amiri'},
    {id: 42, name: 'Mohsen', family: 'Ansary'},
    {id: 42, name: 'Maryam', family: 'Nazary'},
];
let userListContainer, paginationContainer, currentPage, rowsCount, pageContainer

userListContainer = document.querySelector('#list')
paginationContainer = document.querySelector('#pagination')
currentPage = 1
rowsCount = 5

function displayList(allUsersArray, usersContainer, rowsCount, currentPage) {
    let endIndex, startIndex, paginatedUsers, userElement

    usersContainer.innerHTML = ''

    endIndex = rowsCount * currentPage
    startIndex = endIndex - rowsCount

    paginatedUsers = allUsersArray.slice(startIndex, endIndex)

    paginatedUsers.forEach(function (user) {
        userElement = document.createElement('div')
        userElement.classList.add('item')
        userElement.innerHTML = user.name + ' ' + user.family
        usersContainer.appendChild(userElement)
    })
}

function setupPagination (allUsersArray, pagesContainer, rowsCount) {
    let pageCount, btn

    pagesContainer.innerHTML = ''
    pageCount = Math.ceil(allUsersArray.length / rowsCount)

    for (let i = 1 ; i <= pageCount ; i++) {
        btn = paginationButtonGenerator(i, allUsersArray)
        pagesContainer.appendChild(btn)
    }
}
function paginationButtonGenerator (page, allUsersArray) {
    let button = document.createElement('button')
    button.classList.add("pageNumber")
    button.innerHTML = page

    if (page === currentPage) {
        button.classList.add('pageNumber-active')
    }

    button.addEventListener('click', function () {
        currentPage = page
        displayList(allUsersArray, userListContainer, rowsCount, currentPage)

        let prevPage = document.querySelector('.pageNumber-active')
        prevPage.classList.remove('pageNumber-active')
        button.classList.add('pageNumber-active')
    })
    return button
}

setupPagination(listItems, paginationContainer, rowsCount)
displayList(listItems, userListContainer, rowsCount, currentPage)