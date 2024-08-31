

export const useDescargarCurriculum = () => {

    const descargarCurriculum = async () => {
        const response = await fetch('/Cv.pdf');
        const blob = await response.blob();
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `curriculum.pdf`;
    
        link.click();
      }

   return descargarCurriculum
}								