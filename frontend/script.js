document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const userId = document.getElementById('userId').value;
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const userPassword = document.getElementById('userPassword').value;
  
    const user = {
      id: userId,
      name: userName,
      email: userEmail,
      password: userPassword
    };
  
    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
      console.log('User registered:', data);

      document.getElementById('userId').value = '';
      document.getElementById('userName').value = '';
      document.getElementById('userEmail').value = '';
      document.getElementById('userPassword').value = '';
  
      loadUsers();
    })
    .catch(error => console.error('Error:', error));
  });
  
  function loadUsers() {
    fetch('/users')
      .then(response => response.json())
      .then(data => {
        const userList = document.getElementById('userList');
        userList.innerHTML = '';
        data.forEach(user => {
          const li = document.createElement('li');
          li.innerHTML = `
            <span>${user.id}: ${user.name} (${user.email})</span>
            <button class="edit" data-id="${user.id}">Editar</button>
            <button class="delete" data-id="${user.id}">Eliminar</button>
          `;
          li.querySelector('.edit').addEventListener('click', () => editUser(user.id));
          li.querySelector('.delete').addEventListener('click', () => deleteUser(user.id));
          userList.appendChild(li);
        });
      })
      .catch(error => console.error('Error:', error));
  }
  
  function editUser(id) {
    const newName = prompt('Enter new name:');
    if (newName) {
      fetch(`/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, name: newName })
      })
      .then(response => response.json())
      .then(data => {
        console.log('User updated:', data);
        loadUsers();
      })
      .catch(error => console.error('Error:', error));
    }
  }
  
  function deleteUser(id) {
    fetch(`/users/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      console.log('User deleted:', data);
      loadUsers();
    })
    .catch(error => console.error('Error:', error));
  }
  
  loadUsers();
  