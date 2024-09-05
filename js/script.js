function showModal() {
    document.getElementById('qrModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('qrModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('qrModal')) {
        closeModal();
    }
}