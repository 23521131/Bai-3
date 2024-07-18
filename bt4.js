class HocSinh {
    constructor(ten, tuoi, diemTrungBinh) {
        this.ten = ten;
        this.tuoi = tuoi;
        this.diemTrungBinh = diemTrungBinh;
    }

    inThongTin() {
        console.log(`Tên: ${this.ten}`);
        console.log(`Tuổi: ${this.tuoi}`);
        console.log(`Điểm trung bình: ${this.diemTrungBinh}`);
    }
}


const hocSinhA = new HocSinh("Trần Thị Hoàng Nhung ", 18, 9.3);

hocSinhA.inThongTin();
