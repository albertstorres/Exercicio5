const soletrando = (palavra: string): string => {
    let resultado: string = "";

    for (let i = 0; i < palavra.length; i++) {
        if (i === (palavra.length - 1)) {
            resultado += palavra[i];
        } else {
            resultado += `${palavra[i]}-`;
        }
    }

    return resultado;
}


console.log(soletrando("programador"));