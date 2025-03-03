document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const group1 = document.getElementById('group1');
    const group2 = document.getElementById('group2');

    toggleButton.addEventListener('click', function() {
        if (group1.style.display === 'none') {
            group1.style.display = 'grid';
            group2.style.display = 'none';
            toggleButton.textContent = 'Вперёд';
        } else {
            group1.style.display = 'none';
            group2.style.display = 'grid';
            toggleButton.textContent = 'Назад';
        }
    });
});