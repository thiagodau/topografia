import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

import './Report.css'

export function Report() {
  const [data, setData] = useState({} as any);

  useEffect(() => {
    //inserindo imagens
    $('#fileInputControl').on('change', fileInputControlChangeEventHandler)
    function fileInputControlChangeEventHandler(event: any) {
      let fileInputControl = event.target //pega a tag input
      let files = fileInputControl.files //pega os arquivos + de 1 e guarda na FileList
      let arrayLength = files.length //pega quantidade de imagens == tamanho da lista
      $('#images').html(''); //limpa a div de imagens para carregar novas imagens
      let arrayOfImages = []
      for (let index = 0; index < arrayLength; index++) {
        arrayOfImages.push(files[index])
      }

      for (let indexy = 0; indexy < arrayLength; indexy++) {
        let fileReader = new FileReader()
        fileReader.onload = function (event: any) {
          let dataUrl = event.target.result
          $('#images').prepend($('<img>', { id: 'theImg', src: dataUrl }))
        }
        fileReader.readAsDataURL(arrayOfImages[indexy])
      }
    }

    const projectNameLocalStorage = localStorage.getItem('@projectName')
    const matriculaLocalStorage = localStorage.getItem('@matricula')
    const cpfLocalStorage = localStorage.getItem('@cpf')
    const ownerLocalStorage = localStorage.getItem('@owner')
    const addressLocalStorage = localStorage.getItem('@address')

    //inserindo dados do localstorage na pagina
    setData({
      projectName: projectNameLocalStorage,
      matricula: matriculaLocalStorage,
      cpf: cpfLocalStorage,
      owner: ownerLocalStorage,
      address: addressLocalStorage
    })

  }, [])



  const displayButtons = () => {
    $('.report-buttons').addClass('toggle')
    $('.report-pictures-images').addClass('toggle')

    setTimeout(() => {
      $('.report-buttons').removeClass('toggle')
      $('.report-pictures-images').removeClass('toggle')

    }, 1000)
  }

  const imprimir = () => {
    displayButtons()
    window.print()
  }

  return (
    <div className="Report">
      <div className='report-buttons'>
        <input
          type="button"
          value="🖨️ Imprimir"
          onClick={() => { imprimir() }} />
        <input
          type="button"
          value="❌ Cancelar"
          onClick={() => {
            localStorage.clear();
            window.location.replace('/')
          }} />
      </div>

      <div className='A4'>
        <div className='report-container'>
          <img src={logo} alt="Logomarca" width={'120px'} />
          <h3>SERVIÇOS DE TOPOGRAFIA - Parcelamento do Solo</h3>
          <span>Emerson Pinheiro dos Santos - Geógrafo - CREA: MS 63255/D</span>
        </div>
        <div className='report-container'>
          <h2>Relatório Fotográfico</h2>
        </div>
        <div className="report-container">
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <table>
              <tbody>
                <tr>
                  <td><p><strong>Projeto: </strong> {data.projectName}</p></td>
                </tr>
                <tr>
                  <td><p><strong>Proprietário/Requerente: </strong> {data.owner}</p></td>
                  <td><p><strong>CPF: </strong> {data.cpf}</p></td>
                </tr>
                <tr>
                  <td><p><strong>Matrícula: </strong> {data.matricula}</p></td>
                  <td><p><strong>Endereço: </strong> {data.address}</p></td>
                </tr>
                <tr>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="report-container">
          <div className='report-pictures'>
            <form>
              <input
                type="file"
                className="report-pictures-images"
                id="fileInputControl"
                accept="image/*"
                multiple
              />
            </form>

            <div id='images'>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}