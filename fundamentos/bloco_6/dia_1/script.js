function creatStateOpptions() {
  const states = document.getElementById("state");
  const st = [
    { 'AC': 'Acre' },
    { 'AL': 'Alagoas' },
    { 'AP': 'Amapá' },
    { 'AM': 'Amazonas' },
    { 'BA': 'Bahia' },
    { 'CE': 'Ceará' },
    { 'DF': 'Distrito Federal' },
    { 'ES': 'Espírito Santo' },
    { 'GO': 'Goías' },
    { 'MA': 'Maranhão' },
    { 'MT': 'Mato Grosso' },
    { 'MS': 'Mato Grosso do Sul' },
    { 'MG': 'Minas Gerais' },
    { 'PA': 'Pará' },
    { 'PB': 'Paraíba' },
    { 'PR': 'Paraná' },
    { 'PE': 'Pernambuco' },
    { 'PI': 'Piauí' },
    { 'RJ': 'Rio de Janeiro' },
    { 'RN': 'Rio Grande do Norte' },
    { 'RS': 'Rio Grande do Sul' },
    { 'RO': 'Rondônia' },
    { 'RR': 'Roraíma' },
    { 'SC': 'Santa Catarina' },
    { 'SP': 'São Paulo' },
    { 'SE': 'Sergipe' },
    { 'TO': 'Tocantins' },
  ];

  for (let i = 0; i < st.length; i += 1) {
    const sts = document.createElement('option');
    sts.value = Object.keys(st[i]);
    sts.innerText = Object.values(st[i]);
    states.appendChild(sts);
  }
}

function handleSubmit(event) {
  event.preventDefault();

  //validar os dados

  
}

window.onload = function () {
  creatStateOpptions();

  let button = document.getElementById("submit");
  button.addEventListener('click', handleSubmit);
}
