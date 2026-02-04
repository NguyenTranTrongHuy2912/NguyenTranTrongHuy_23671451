const url = 'https://696d81f4f4a79b31518151fe.mockapi.io/api/v1/sinhVien';
const listBody = document.getElementById('userListData');

// 1. READ: Lấy danh sách sinh viên
async function renderUsers() {
    try {
        const response = await axios.get(url);
        const users = response.data;

        const htmls = users.map(user => `
            <tr>
                <td><img src="${user.avatar}" class="avatar" alt="avatar"></td>
                <td><strong>${user.name}</strong></td>
                <td>${user.createdAt ? user.createdAt.split('T')[0] : 'N/A'}</td>
                <td>
                    <button class="btn-edit" onclick="handleUpdate('${user.id}', '${user.name}')">Sửa</button>
                    <button class="btn-delete" onclick="handleDelete('${user.id}')">Xóa</button>
                </td>
            </tr>
        `);

        listBody.innerHTML = htmls.join('');
    } catch (error) {
        console.error("Lỗi tải danh sách:", error);
        alert("Không thể tải dữ liệu!");
    }
}

// 2. CREATE: Thêm sinh viên mới
async function handleCreate() {
    const nameInput = document.getElementById('userName');
    const name = nameInput.value.trim();

    if (!name) return alert("Vui lòng nhập tên!");

    try {
        await axios.post(url, { name: name });
        nameInput.value = '';
        await renderUsers(); 
    } catch (error) {
        alert("Lỗi khi thêm sinh viên!");
    }
}

// 3. DELETE: Xóa sinh viên (Đã đưa ra ngoài)
async function handleDelete(id) {
    if (!confirm("Bạn có chắc chắn muốn xóa?")) return;
    try {
        await axios.delete(`${url}/${id}`);
        await renderUsers();
    } catch (error) {
        alert("Lỗi khi xóa!");
    }
}

// 4. UPDATE: Sửa tên sinh viên (Đã đưa ra ngoài)
async function handleUpdate(id, currentName) {
    const newName = prompt("Nhập tên mới:", currentName);
    if (!newName || newName === currentName) return;

    try {
        await axios.put(`${url}/${id}`, { name: newName });
        await renderUsers();
    } catch (error) {
        alert("Lỗi khi cập nhật!");
    }
}

renderUsers();