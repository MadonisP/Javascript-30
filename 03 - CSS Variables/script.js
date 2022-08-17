function handleUpdate() {
    document.documentElement.style.setProperty(`--${this.name}`, this.value + this.dataset.sizing || '');
}

const inputs = document.querySelectorAll('.controls input');


inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));