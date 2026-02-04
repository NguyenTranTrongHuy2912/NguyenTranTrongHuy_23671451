//Su dung Fetch API de tuong tac voi MockAPI
const url = 'https://696d81f4f4a79b31518151fe.mockapi.io/api/v1/sinhVien';

function renderUsers() {
    fetch(url)
        .then(res => res.json())
        .then(users => {
            const listBody = document.getElementById('userListData');

            const htmls = users.map(user => {
                const shortDate = user.createdAt.split('T')[0];

                return `
                <tr>
                    <td><img src="${user.avatar}" class="avatar"></td>
                    <td>${user.name}</td>
                    <td>${shortDate}</td>
                    <td>
                        <button onclick="handleUpdate('${user.id}', '${user.name}')">Sửa</button>
                        <button onclick="handleDelete('${user.id}')">Xóa</button>
                    </td>
                </tr>
                `;
            });
            listBody.innerHTML = htmls.join('');
        });
}

// Thêm mới
function handleCreate() {
    const input = document.getElementById('userName');
    if (!input.value) return;

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: input.value })
    })
        .then(() => {
            input.value = ''; // Xóa text sau khi thêm
            renderUsers();    // Cập nhật lại danh sách
        });
}

// Xóa
function handleDelete(id) {
    fetch(url + '/' + id, { method: 'DELETE' })
        .then(() => renderUsers());
}

// Sửa
function handleUpdate(id, currentName) {
    const newName = prompt("Đổi tên thành:", currentName);
    if (newName) {
        fetch(url + '/' + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newName })
        })
            .then(() => renderUsers());
    }
}

renderUsers();