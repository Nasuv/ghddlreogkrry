window.addEventListener('DOMContentLoaded', function() {
    var hiddenContents = document.querySelectorAll('.hidden-content');
    hiddenContents.forEach(function(content) {
        content.style.display = 'none';
    });
});

function toggleContent(contentNumber) {
    var content = document.getElementById('content' + contentNumber);
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}