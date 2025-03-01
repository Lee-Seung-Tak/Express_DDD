const users = []; // 예시로 메모리 배열을 사용 (실제 앱에서는 DB 연동)

exports.createUser = (id, password, name, phone, address, role) => {
    const newUser = { id, password, name, phone, address, role };
    users.push(newUser); // 사용자 배열에 새 사용자 추가
    return newUser;
};

exports.getAllUsers = () => {
    return users; // 모든 사용자 데이터 반환
};

exports.getUserById = (id) => {
    return users.find(user => user.id === id); // id로 사용자 찾기
};

exports.updateUser = (id, updatedData) => {
    const user = users.find(u => u.id === id);
    if (!user) return null; // 사용자 없으면 null 반환

    // 기존 사용자 정보 업데이트
    Object.assign(user, updatedData);
    return user;
};

exports.deleteUser = (id) => {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) return null; // 사용자 없으면 null 반환

    users.splice(index, 1); // 사용자 삭제
    return true; // 성공적으로 삭제됨
};
