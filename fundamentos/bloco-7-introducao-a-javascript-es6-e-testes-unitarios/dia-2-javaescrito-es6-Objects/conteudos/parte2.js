const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

  const parte2 = (student)  => {
      const array = Object.keys(student);
      for (i in array) {
        console.log(`${array[i]}, Nível: ${student[array[i]]}`)
      }
  }

  parte2(student1);
  parte2(student2);