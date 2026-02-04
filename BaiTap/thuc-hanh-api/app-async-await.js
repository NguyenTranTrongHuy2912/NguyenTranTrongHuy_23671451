// Đường dẫn API từ MockAPI của bạn
const url = 'https://696d81f4f4a79b31518151fe.mockapi.io/api/v1/sinhVien';

// 1. READ: Lấy danh sách sinh viên
async function renderUsers() {
    try {
        const response = await fetch(url);

        if (!response.ok) throw new Error("Không thể kết nối đến API");

        const users = await response.json();
        const listBody = document.getElementById('userListData');

        const htmls = users.map(user => {
            const date = user.createdAt ? user.createdAt.split('T')[0] : 'N/A';

            return `
            <tr>
                <td><img src="${user.avatar}" class="avatar" alt="avatar"></td>
                <td><strong>${user.name}</strong></td>
                <td>${date}</td>
                <td>
                    <button class="btn-edit" onclick="handleUpdate('${user.id}', '${user.name}')">Sửa</button>
                    <button class="btn-delete" onclick="handleDelete('${user.id}')">Xóa</button>
                </td>
            </tr>
            `;
        });

        listBody.innerHTML = htmls.join('');
    } catch (error) {
        console.error("Lỗi khi tải danh sách:", error.message);
        alert("Đã xảy ra lỗi khi tải dữ liệu sinh viên.");
    }
}

// 2. CREATE: Thêm sinh viên mới
async function handleCreate() {
    const nameInput = document.getElementById('userName');
    const name = nameInput.value.trim();

    if (!name) {
        alert("Vui lòng nhập tên sinh viên!");
        return;
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name })
        });

        if (response.ok) {
            nameInput.value = ''; // Reset ô nhập liệu
            await renderUsers();  // Cập nhật lại giao diện
        }
    } catch (error) {
        alert("Lỗi khi thêm sinh viên mới!");
    }
}

// 3. DELETE: Xóa sinh viên theo ID
async function handleDelete(id) {
    if (!confirm("Bạn có chắc chắn muốn xóa sinh viên này?")) return;

    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            await renderUsers(); // Cập nhật lại danh sách sau khi xóa thành công
        }
    } catch (error) {
        alert("Không thể xóa sinh viên này!");
    }
}

//  4. UPDATE: Chỉnh sửa tên sinh viên
async function handleUpdate(id, currentName) {
    const newName = prompt("Chỉnh sửa họ tên sinh viên:", currentName);

    // Kiểm tra nếu người dùng nhấn Cancel hoặc nhập tên trùng với tên cũ
    if (!newName || newName === currentName) return;

    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newName })
        });

        if (response.ok) {
            await renderUsers();
        }
    } catch (error) {
        alert("Lỗi khi cập nhật thông tin!");
    }
}

renderUsers();