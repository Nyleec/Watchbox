// JavaScript to filter and sort TV shows
document.addEventListener('DOMContentLoaded', () => {
    // Create a search bar element
    const searchInput = document.createElement('input');
    searchInput.setAttribute('type', 'text');
    searchInput.setAttribute('placeholder', 'Search');
    searchInput.classList.add('search-bar');
    document.querySelector('.tv-shows-content').insertBefore(searchInput, document.querySelector('.shows-grid'));

    // Create a sort button element
    const sortButton = document.createElement('button');
    sortButton.textContent = 'Sort Alphabetically';
    sortButton.classList.add('sort-button');
    document.querySelector('.tv-shows-content').insertBefore(sortButton, document.querySelector('.shows-grid'));

    // Filter functionality
    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        const showItems = document.querySelectorAll('.show-item');
        showItems.forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            if (title.includes(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Sort functionality
    sortButton.addEventListener('click', () => {
        const showsGrid = document.querySelector('.shows-grid');
        const showItems = Array.from(document.querySelectorAll('.show-item'));

        // Sort the show items based on the title
        showItems.sort((a, b) => {
            const titleA = a.querySelector('h3').textContent.toLowerCase();
            const titleB = b.querySelector('h3').textContent.toLowerCase();
            return titleA.localeCompare(titleB);
        });

        // Clear the grid and re-append the sorted items
        showsGrid.innerHTML = '';
        showItems.forEach(item => {
            showsGrid.appendChild(item);
        });
    });
});
