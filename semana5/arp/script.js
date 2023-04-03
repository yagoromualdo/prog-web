const patients = [
    { id: 1, nome: "José da Silva", cpf: "123.456.789-00", telefone: '(62) 9 9999 9999' },
    { id: 2, nome: "Fábio Souza", cpf: "987.654.321-00", telefone: '(62) 9 9999 9999' },
    { id: 3, nome: "Júlia Santos", cpf: "456.789.123-00", telefone: '(62) 9 9999 9999' },
    { id: 4,nome: "Maria Silva", cpf: "111.222.333-00", telefone: '(62) 9 9999 9999' },
    { id: 5,nome: "João Oliveira", cpf: "444.555.666-00", telefone: '(62) 9 9999 9999' },
  ];
  
  function displayPatients(patients) {
    const patientList = document.getElementById("patient-list");
    patientList.innerHTML = "";
    
    patients.forEach(patient => {
      const tr = document.createElement("tr");
      tr.className = "row";
      const td1 = document.createElement("td");
      td1.className = "col-md-1";
      td1.textContent = `${patient.id}`;
      const td2 = document.createElement("td");
      td2.className = "col-md-4";
      td2.textContent = `${patient.nome}`;
      const td3 = document.createElement("td");
      td3.className = "col-md-3";
      td3.textContent = `${patient.cpf}`;
      const td4 = document.createElement("td");
      td4.className = "col-md-4";
      td4.textContent = `${patient.telefone}`;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
    //   li.textContent = `${patient.id}`;
      patientList.appendChild(tr);
    });
  }
  
  function searchPatients() {
    const searchInput = document.getElementById("search-input");
    const query = searchInput.value.toLowerCase();
    
    const filteredPatients = patients.filter(patient => {
      const nome = patient.nome.toLowerCase();
      const cpf = patient.cpf.replace(/[^\d]/g, ''); // remove os pontos e o traço do CPF para comparar apenas os números
      return nome.includes(query) || cpf.includes(query);
    });
    
    displayPatients(filteredPatients);
  }
  
  displayPatients(patients);
  