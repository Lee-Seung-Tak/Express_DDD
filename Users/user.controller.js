const userService = require('./user.service'); // 서비스 파일을 불러옵니다.

exports.createUser = async (req, res) => {
    try {
        const { id, password, name, phone, address, role } = req.body;
        const newUser = await userService.createUser(id, password, name, phone, address, role);
        res.status(201).json(newUser); // 사용자 생성 성공 시 201 상태 코드 반환
    } catch (error) {
        res.status(500).json({ error: error.message }); // 오류 발생 시 500 상태 코드 반환
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users); // 모든 사용자 정보를 응답
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' }); // 사용자 미존재 시 404 상태 코드
        }
        res.status(200).json(user); // 사용자 정보 응답
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await userService.updateUser(req.params.id, req.body);
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser); // 수정된 사용자 정보 응답
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const result = await userService.deleteUser(req.params.id);
        if (!result) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' }); // 삭제 성공 시 응답
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
