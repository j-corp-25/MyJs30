const inputs = document.querySelectorAll('.controls input')

const handleUpdate = (event) => {
    const input = event.target;
    const suffix = input.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${input.name}`,input.value + suffix);

};

inputs.forEach(inputting => inputting.addEventListener('change',handleUpdate))
inputs.forEach(inputting => inputting.addEventListener('mousemove',handleUpdate))
