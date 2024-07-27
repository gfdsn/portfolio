
const writtingAnimation = (elementToWriteTo: HTMLHeadingElement, text: string): void => {

    let letterI: number = 0;

    const write = () => {

        const speed: number = 250;

        if (letterI < text.length) {    
            elementToWriteTo.innerHTML += text.charAt(letterI);

            letterI++;
            setTimeout(write, speed);
          }
    }
    
    write();
}

export default writtingAnimation;