const quizData = [
    {
        chapter: "CHƯƠNG 1: TẦM QUAN TRỌNG CỦA GIAO DIỆN NGƯỜI SỬ DỤNG",
        questions: [
            {
                question: "Tương tác Người - Máy (HCI) là nghiên cứu về sự tương tác giữa con người và máy tính. HCI là sự mở rộng của hai lĩnh vực nào?",
                options: [
                    "Khoa học máy tính và Tâm lý học",
                    "Khoa học máy tính và Công thái học (nhân tố con người)",
                    "Công thái học và Tâm lý học",
                    "Thiết kế và Kỹ nghệ"
                ],
                correct: [1] // Index của đáp án đúng (0-indexed)
            },
            {
                question: "Giao diện Người sử dụng (UI) được cấu thành bởi những thành phần nào?",
                options: [
                    "Phần cứng và Phần mềm",
                    "Đầu vào và Đầu ra",
                    "Thiết kế và Phát triển",
                    "Giao tiếp và Tương tác"
                ],
                correct: [1]
            },
            {
                question: "Nghiên cứu về HCI bao gồm những lĩnh vực nào?",
                options: [
                    "Khoa học máy tính và Sinh lý học",
                    "Khoa học máy tính và Tâm lý học",
                    "Công thái học và Ngôn ngữ học",
                    "Xã hội học và Thiết kế"
                ],
                correct: [1]
            },
            {
                question: "Theo tài liệu, có bao nhiêu lĩnh vực liên quan đến HCI?",
                options: ["7", "9", "11", "13"],
                correct: [2]
            },
            {
                question: "HCI nghiên cứu về những khía cạnh nào?",
                options: [
                    "Thiết kế, Chức năng, và Phát triển",
                    "Hình thức, Tiện ích, và Cài đặt",
                    "Hình thức, Chức năng, và Cài đặt",
                    "Tương tác, Hiệu suất, và Người dùng"
                ],
                correct: [2]
            },
            {
                question: "Có bao nhiêu nhiệm vụ thiết kế cơ bản của HCI được liệt kê trong tài liệu?",
                options: ["4", "5", "6", "7"],
                correct: [2]
            },
            {
                question: "Mục tiêu của nhiệm vụ 'Hiểu các đặc tính cơ bản của con người mà nó tác động đến quá trình tương tác của họ với máy tính' trong HCI là gì?",
                options: [
                    "Phân tích người sử dụng",
                    "Hiểu người sử dụng",
                    "Xác định phương pháp thiết kế",
                    "Thiết kế giao diện"
                ],
                correct: [1]
            },
            {
                question: "Đâu là một trong những lý do chính tại sao phải nghiên cứu HCI? (Chọn nhiều đáp án đúng)",
                options: [
                    "Giảm thời gian lập trình",
                    "Giảm chi phí cho các trục trặc giao diện",
                    "Tăng khả năng bán được sản phẩm",
                    "Tăng năng suất và hiệu quả công việc",
                    "Giảm những bệnh nghề nghiệp do dùng máy tính",
                    "Giảm những lỗi nguy hiểm đến tính mạng",
                    "Tăng sự hài lòng khách hàng"
                ],
                correct: [1, 2, 3, 4, 5, 6] // Index của nhiều đáp án đúng
            },
            {
                question: "Tại sao UI được coi là phần quan trọng nhất của bất kỳ hệ thống máy tính nào?",
                options: [
                    "Vì đây là phần phức tạp nhất trong quá trình lập trình.",
                    "Vì nó quyết định tốc độ xử lý của hệ thống.",
                    "Vì đây là phần hướng tới hầu hết người sử dụng, có thể nhìn thấy, nghe thấy và tác động vào.",
                    "Vì nó ẩn chứa phần lớn mã nguồn phần mềm."
                ],
                correct: [2]
            },
            {
                question: "Đâu là một trong các yếu tố cần xem xét khi thiết kế UI? (Chọn nhiều đáp án đúng)",
                options: [
                    "Sự kết hợp của các cơ chế đầu vào và đầu ra được thiết kế tốt để thỏa mãn nhu cầu, khả năng và hạn chế của người sử dụng.",
                    "Cho phép người sử dụng tập trung vào các thông tin và tác vụ của mình.",
                    "Tối đa hóa số lượng tính năng phức tạp.",
                    "Giảm thiểu chi phí sản xuất."
                ],
                correct: [0, 1]
            },
            {
                question: "Theo tài liệu, tại sao chúng ta vẫn cho ra các hệ thống hoạt động không hiệu quả dù có sự hỗ trợ của công cụ và công nghệ? (Chọn nhiều đáp án đúng)",
                options: [
                    "Chúng ta không thực sự quan tâm.",
                    "Chúng ta không có giác quan thông thường.",
                    "Chúng ta không có thời gian.",
                    "Chúng ta vẫn không biết cái gì thực sự tạo ra thiết kế tiện dùng."
                ],
                correct: [2, 3]
            },
            {
                question: "Hậu quả của một thiết kế không phù hợp là gì? (Chọn nhiều đáp án đúng)",
                options: [
                    "Thiết kế phức tạp, khó hiểu, không đầy đủ: gặp khó khăn trong công việc và phạm nhiều lỗi hơn.",
                    "Thiết kế không phù hợp: gây thất vọng ở mọi người đối với hệ thống và họ có thể ngưng sử dụng nó.",
                    "Phát sinh một số vấn đề sức khỏe.",
                    "Tăng hiệu quả công việc."
                ],
                correct: [0, 1, 2]
            },
            {
                question: "Một thiết kế UI phù hợp sẽ có những đặc điểm nào? (Chọn nhiều đáp án đúng)",
                options: [
                    "Sự kết hợp tốt của các quy trình đầu vào và đầu ra để đáp ứng các yêu cầu của người dùng một cách hiệu quả nhất.",
                    "Cho phép người dùng tập trung vào dữ liệu và tác vụ.",
                    "Cung cấp dữ liệu cho người dùng để thực hiện các tác vụ của họ.",
                    "Cung cấp nhiều tính năng không cần thiết."
                ],
                correct: [0, 1, 2]
            },
            {
                question: "Đâu là một trong các yếu tố xem xét khi thiết kế UI? (Chọn nhiều đáp án đúng)",
                options: [
                    "Những gì người sử dụng muốn và mong đợi.",
                    "Những giới hạn về thể chất và khả năng mà con người sở hữu.",
                    "Hệ thống xử lý thông tin hoạt động như thế nào.",
                    "Những gì mọi người thấy thú vị và hấp dẫn.",
                    "Các đặc tính kỹ thuật và hạn chế của phần cứng và phần mềm máy tính cũng phải được xem xét."
                ],
                correct: [0, 1, 2, 3, 4]
            },
            {
                question: "Ai là những người thường tham gia vào quá trình xây dựng giao diện? (Chọn nhiều đáp án đúng)",
                options: [
                    "Chuyên gia thiết kế đồ họa",
                    "Người thiết kế giao diện",
                    "Người làm tài liệu kỹ thuật",
                    "Nhân viên tiếp thị",
                    "Kỹ sư kiểm thử",
                    "Kỹ sư phần mềm"
                ],
                correct: [0, 1, 2, 3, 4, 5]
            }
        ]
    },
    {
        chapter: "CHƯƠNG 2: CÁC ĐẶC TRƯNG CỦA GIAO DIỆN NGƯỜI SỬ DỤNG ĐỒ HỌA VÀ WEB",
        questions: [
            {
                question: "Theo tài liệu, có bao nhiêu kiểu tương tác người - máy được đề cập?",
                options: ["3", "4", "5", "6"],
                correct: [2]
            },
            {
                question: "Đâu là một trong các kiểu tương tác người - máy? (Chọn nhiều đáp án đúng)",
                options: [
                    "Các dòng lệnh (sử dụng bàn phím)",
                    "Lựa chọn menu",
                    "Điền biểu mẫu",
                    "Thao tác trực tiếp",
                    "Thuyết hình người"
                ],
                correct: [0, 1, 2, 3, 4]
            },
            {
                question: "Giao diện đồ họa (GUI) còn được gọi là giao diện nào?",
                options: [
                    "CLI (Command Line Interface)",
                    "TUI (Text User Interface)",
                    "WIMP (Windows, Icons, Menus, Pointers)",
                    "NUI (Natural User Interface)"
                ],
                correct: [2]
            },
            {
                question: "Đặc điểm nào sau đây là của thao tác bằng tay trực tiếp? (Chọn nhiều đáp án đúng)",
                options: [
                    "Hệ thống được miêu tả sinh động như phạm vi của thế giới thực.",
                    "Các đối tượng và các hành động được hiển thị liên tục.",
                    "Các hành động có tốc độ nhanh và tăng dần với hiển thị trực quan các kết quả.",
                    "Các hành động phát sinh có thể hủy bỏ dễ dàng."
                ],
                correct: [0, 1, 2, 3]
            },
            {
                question: "Thao tác bằng tay gián tiếp thường sử dụng những phương thức nào? (Chọn nhiều đáp án đúng)",
                options: [
                    "Sử dụng từ và văn bản.",
                    "Sử dụng hình ảnh và biểu tượng.",
                    "Sử dụng hành động gõ (thay con trỏ).",
                    "Sử dụng cảm ứng đa điểm."
                ],
                correct: [0, 2]
            },
            {
                question: "Mục tiêu chính khi thiết kế trang web là gì?",
                options: [
                    "Chú trọng đến ứng dụng và tương tác.",
                    "Chú trọng đến nội dung hay thông tin.",
                    "Chú trọng đến bảo mật dữ liệu.",
                    "Chú trọng đến tốc độ tải trang."
                ],
                correct: [1]
            },
            {
                question: "Mục tiêu chính khi thiết kế ứng dụng web là gì?",
                options: [
                    "Chú trọng đến ứng dụng, tương tác với người dùng, cho phép một người làm và lưu lại một số thứ.",
                    "Chú trọng đến nội dung thông tin.",
                    "Chú trọng đến khả năng tương thích trình duyệt.",
                    "Chú trọng đến tối ưu hóa SEO."
                ],
                correct: [0]
            },
            {
                question: "Intranet được định nghĩa là gì?",
                options: [
                    "Một hệ thống web được sử dụng rộng rãi trên toàn cầu.",
                    "Hệ thống web được kết hợp giữa các hệ thống đồ họa thương mại và Web trong một thực thể, thường dùng trong một tổ chức.",
                    "Một loại mạng riêng ảo (VPN).",
                    "Một hệ thống chỉ dùng cho mục đích giải trí."
                ],
                correct: [1]
            },
            {
                question: "Đâu là sự khác biệt giữa Intranet và Internet của một tổ chức về 'Người sử dụng'?",
                options: [
                    "Internet: nhân viên của tổ chức, có hiểu biết nhiều về tổ chức; Intranet: không biết nhiều và không quan tâm nhiều về tổ chức.",
                    "Intranet: nhân viên của tổ chức, có hiểu biết nhiều về tổ chức; Internet: không biết nhiều và không quan tâm nhiều về tổ chức.",
                    "Cả hai đều có người dùng giống nhau.",
                    "Intranet chỉ dành cho khách hàng, Internet dành cho nhân viên."
                ],
                correct: [1]
            },
            {
                question: "Đâu là sự khác biệt giữa Intranet và Internet của một tổ chức về 'Các tác vụ'?",
                options: [
                    "Internet: sử dụng cho các hoạt động hàng ngày của tổ chức, giao dịch phức tạp; Intranet: chủ yếu để tìm kiếm thông tin, giao dịch đơn giản.",
                    "Intranet: sử dụng cho các hoạt động hàng ngày của tổ chức, giao dịch phức tạp; Internet: chủ yếu để tìm kiếm thông tin, giao dịch đơn giản.",
                    "Cả hai đều có tác vụ giống nhau.",
                    "Intranet chỉ để giải trí, Internet để làm việc."
                ],
                correct: [1]
            },
            {
                question: "Đâu là sự khác biệt giữa Intranet và Internet của một tổ chức về 'Khối lượng thông tin'?",
                options: [
                    "Internet: lớn hơn nhiều (10-100 lần); Intranet: nhỏ hơn.",
                    "Intranet: lớn hơn nhiều (10-100 lần); Internet: nhỏ hơn.",
                    "Cả hai có khối lượng thông tin tương đương.",
                    "Khối lượng thông tin không phải là yếu tố khác biệt."
                ],
                correct: [1]
            },
            {
                question: "Đâu là sự khác biệt giữa Intranet và Internet của một tổ chức về 'Xu thế thiết kế'?",
                options: [
                    "Internet: loại bỏ các tính năng vô dụng, quảng cáo và không hấp dẫn; Intranet: cao hơn, cập nhật thường xuyên hơn.",
                    "Intranet: loại bỏ các tính năng vô dụng, quảng cáo và không hấp dẫn; Internet: cao hơn, cập nhật thường xuyên hơn.",
                    "Cả hai có xu thế thiết kế giống nhau.",
                    "Internet tập trung vào tính đơn giản, Intranet tập trung vào tính phức tạp."
                ],
                correct: [1]
            },
            {
                question: "Đâu là một trong các nguyên tắc thiết kế giao diện người sử dụng? (Chọn nhiều đáp án đúng)",
                options: [
                    "Khả năng tiếp cận (đặc tính có khả năng tiếp cận: khả năng nhận biết, thao tác, tính đơn giản, khoan dung)",
                    "Hài lòng về thẩm mỹ",
                    "Khả dụng",
                    "Rõ ràng",
                    "Tối đa hóa quảng cáo"
                ],
                correct: [0, 1, 2, 3]
            }
        ]
    },
    {
        chapter: "PHẦN 2: BÀI 3 - TÍNH TIỆN DÙNG",
        questions: [
            {
                question: "Tính tiện dùng được định nghĩa là gì?",
                options: [
                    "Mức độ hấp dẫn của sản phẩm đối với người dùng.",
                    "Khả năng sản phẩm hoạt động mà không có lỗi.",
                    "Phạm vi trong đó sản phẩm được sử dụng bởi nhóm người xác định với tính hiệu quả, năng suất và sự thỏa mãn trong ngữ cảnh sử dụng xác định.",
                    "Số lượng tính năng mà một sản phẩm cung cấp."
                ],
                correct: [2]
            },
            {
                question: "Đâu là một trong những vấn đề tiện dùng thường gặp? (Chọn nhiều đáp án đúng)",
                options: [
                    "Gây nhiễu thị giác: bố trí các thành phần hỗn độn.",
                    "Làm giảm khả năng đọc thông tin: nhiều kiểu chữ, màu sắc.",
                    "Nhiều chi tiết khó hiểu: một số chi tiết không liên quan đến chức năng.",
                    "Nhiều trò gây bực mình: chuyển động không ngừng, âm thanh tự động bật.",
                    "Sự điều hướng lẫn lộn.",
                    "Điều hướng không hiệu quả.",
                    "Tổ chức hoạt động không hiệu quả.",
                    "Quá tải thông tin.",
                    "Sự không nhất quán trong thiết kế.",
                    "Thông tin quá cũ hoặc không đề ngày tháng.",
                    "Thiết kế lỗi thời."
                ],
                correct: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            },
            {
                question: "Theo Don Norman, đâu là một trong 6 nguyên lý thiết kế để hệ thống có tính tiện dùng? (Chọn nhiều đáp án đúng)",
                options: [
                    "Phản hồi",
                    "Ràng buộc",
                    "Ánh xạ",
                    "Nhất quán: nhất quán trong, ngoài, ẩn dụ",
                    "Gợi ý",
                    "Tối đa hóa tính năng"
                ],
                correct: [0, 1, 2, 3, 4]
            },
            {
                question: "Các giai đoạn lặp trong kỹ nghệ hệ thống có tính sử dụng bao gồm những gì? (Chọn nhiều đáp án đúng)",
                options: ["Thiết kế", "Cài đặt", "Đánh giá", "Tiếp thị"],
                correct: [0, 1, 2]
            }
        ]
    },
    {
        chapter: "PHẦN 2: BƯỚC 1 - HIỂU RÕ NGƯỜI SỬ DỤNG",
        questions: [
            {
                question: "Đâu là một trong các nguyên tắc thiết kế để tạo ra một hệ thống hữu dụng thật sự? (Chọn nhiều đáp án đúng)",
                options: [
                    "Hiểu rõ người sử dụng tương tác với máy tính như thế nào.",
                    "Hiểu rõ những đặc điểm quan trọng của con người có ảnh hưởng đến thiết kế.",
                    "Nhận biết được trình độ hiểu biết và kinh nghiệm của người sử dụng.",
                    "Nhận biết được những đặc điểm về nhu cầu, nhiệm vụ và công việc của người sử dụng.",
                    "Nhận biết đặc điểm tâm lý của người sử dụng.",
                    "Nhận biết đặc điểm tự nhiên của người sử dụng.",
                    "Sử dụng các phương pháp khuyến nghị để có được sự hiểu biết về người sử dụng."
                ],
                correct: [0, 1, 2, 3, 4, 5, 6]
            },
            {
                question: "Chu trình hành động của con người bao gồm những giai đoạn nào? (Chọn nhiều đáp án đúng)",
                options: [
                    "Hình thành mục tiêu.",
                    "Thực hiện các hoạt động để đạt được mục tiêu.",
                    "Đánh giá các kết quả của hành động.",
                    "Lặp lại hành động."
                ],
                correct: [0, 1, 2]
            },
            {
                question: "Đâu là một trong các đặc tính quan trọng của con người cần xem xét trong thiết kế? (Chọn nhiều đáp án đúng)",
                options: [
                    "Sự nhận thức.",
                    "Trí nhớ.",
                    "Tính sắc bén trực quan.",
                    "Khả năng nhìn trung tâm và ngoại vi.",
                    "Sự tích lũy cảm giác.",
                    "Xử lý thông tin.",
                    "Học.",
                    "Kỹ năng.",
                    "Các khác biệt của cá nhân."
                ],
                correct: [0, 1, 2, 3, 4, 5, 6, 7, 8]
            },
            {
                question: "Các khía cạnh nào của tâm lý học nhận thức ảnh hưởng đến thiết kế giao diện người sử dụng? (Chọn nhiều đáp án đúng)",
                options: [
                    "Cách con người tiếp nhận thông tin xung quanh họ.",
                    "Cách con người lưu trữ thông tin.",
                    "Cách con người xử lý thông tin và giải quyết vấn đề.",
                    "Cách con người tương tác xã hội."
                ],
                correct: [0, 1, 2]
            },
            {
                question: "Mô hình xử lý thông tin MHP bao gồm những phân hệ tương tác nào? (Chọn nhiều đáp án đúng)",
                options: [
                    "Bộ xử lý cảm nhận.",
                    "Bộ xử lý nhận thức.",
                    "Bộ xử lý vận động.",
                    "Bộ xử lý ngôn ngữ."
                ],
                correct: [0, 1, 2]
            },
            {
                question: "Đâu là một trong những mối quan tâm của con người trong thiết kế doanh nghiệp? (Chọn nhiều đáp án đúng)",
                options: [
                    "Kiến thức và kinh nghiệm người sử dụng.",
                    "Những tác vụ và nhu cầu người sử dụng.",
                    "Đặc tính tâm lý người sử dụng.",
                    "Những đặc tính tự nhiên của người sử dụng.",
                    "Đặc tính của phần cứng."
                ],
                correct: [0, 1, 2, 3]
            },
            {
                question: "Đâu là một trong các yếu tố để phân tích người sử dụng? (Chọn nhiều đáp án đúng)",
                options: [
                    "Vai trò trong tổ chức của người sử dụng.",
                    "Kỹ năng sử dụng máy tính.",
                    "Kỹ năng trong lĩnh vực ứng dụng.",
                    "Nền tảng về văn hóa/xã hội.",
                    "Tần suất sử dụng ứng dụng."
                ],
                correct: [0, 1, 2, 3, 4]
            }
        ]
    },
    {
        chapter: "PHẦN 2: BƯỚC 2 - HIỂU RÕ CHỨC NĂNG HOẠT ĐỘNG",
        questions: [
            {
                question: "Đâu là một trong các kỹ thuật xác định yêu cầu? (Chọn nhiều đáp án đúng)",
                options: [
                    "Phương pháp trực tiếp: gặp gỡ, xem xét thực tế.",
                    "Phương pháp gián tiếp: sử dụng phương tiện trung gian.",
                    "Phương pháp ngẫu nhiên.",
                    "Phương pháp thử và sai."
                ],
                correct: [0, 1]
            },
            {
                question: "Đâu là một vấn đề có thể xảy ra trong khi thu thập các yêu cầu? (Chọn nhiều đáp án đúng)",
                options: [
                    "Không có đủ người sử dụng, khách hàng và những nhóm quan tâm tham gia vào quá trình.",
                    "Thiếu sự quản lý hoặc kết hợp các yêu cầu.",
                    "Các vấn đề giao tiếp giữa tất cả những người tham gia.",
                    "Việc nắm bắt những thông tin liên quan có thể gặp khó khăn.",
                    "Những người hiểu vấn đề có thể bị miễn cưỡng.",
                    "Các nhân tố về tổ chức, chính trị và các chương trình nghị sự có thể ảnh hưởng tới quá trình.",
                    "Có thể có sự chênh lệch về hiểu biết.",
                    "Sự thay đổi môi trường kinh tế, môi trường làm việc và vai trò của nhân viên."
                ],
                correct: [0, 1, 2, 3, 4, 5, 6, 7]
            },
            {
                question: "Mục tiêu của phân tích nhiệm vụ là gì? (Chọn nhiều đáp án đúng)",
                options: [
                    "Cung cấp thông tin liên quan đến các luồng con việc.",
                    "Cung cấp thông tin liên quan đến mối quan hệ bên trong giữa mọi người, các đối tượng và hành động.",
                    "Cung cấp thông tin liên quan đến các khuôn khổ khái niệm của người sử dụng.",
                    "Xác định chi phí phát triển hệ thống."
                ],
                correct: [0, 1, 2]
            },
            {
                question: "Kết quả của phân tích nhiệm vụ là gì? (Chọn nhiều đáp án đúng)",
                options: [
                    "Một bản mô tả hoàn chỉnh những nhiệm vụ và tương tác của tất cả người sử dụng và được coi là một kịch bản.",
                    "Danh sách các đối tượng mà những người sử dụng cho là quan trọng với việc họ đang làm.",
                    "Tạo ra một mô hình khái niệm (dựa trên mô hình tư duy của người sử dụng) cho giao diện người sử dụng.",
                    "Báo cáo tài chính của dự án."
                ],
                correct: [0, 1, 2]
            },
            {
                question: "Đâu là một trong các phương pháp phân tích nhiệm vụ? (Chọn nhiều đáp án đúng)",
                options: [
                    "Tiệm cận hướng hành động: Mô tả các khía cạnh hành động ở mức độ chi tiết khác nhau.",
                    "Tiệm cận hướng nhận thức: Tập trung vào các tiến trình trí tuệ, là cơ sở của các hành động.",
                    "Tiệm cận hướng dữ liệu.",
                    "Tiệm cận hướng cấu trúc."
                ],
                correct: [0, 1]
            },
            {
                question: "Phân tích nhiệm vụ và phân tích hệ thống khác nhau như thế nào?",
                options: [
                    "Phân tích nhiệm vụ hướng tới thiết kế bên trong hệ thống, còn phân tích hệ thống hướng tới hành động bên ngoài của người sử dụng.",
                    "Phân tích nhiệm vụ hướng tới hành động bên ngoài của người sử dụng, còn phân tích hệ thống hướng tới thiết kế bên trong hệ thống.",
                    "Cả hai đều hướng tới thiết kế bên trong hệ thống.",
                    "Cả hai đều hướng tới hành động bên ngoài của người sử dụng."
                ],
                correct: [1]
            },
            {
                question: "Nhiệm vụ và mục tiêu khác nhau như thế nào?",
                options: [
                    "Nhiệm vụ là trạng thái mà người sử dụng muốn đạt tới, còn mục tiêu là hành động mà người sử dụng sẽ thực hiện.",
                    "Nhiệm vụ là hành động mà người sử dụng sẽ thực hiện, còn mục tiêu là trạng thái mà người sử dụng muốn đạt tới.",
                    "Nhiệm vụ và mục tiêu là hai khái niệm tương đồng.",
                    "Nhiệm vụ chỉ áp dụng cho người mới, mục tiêu áp dụng cho người thành thạo."
                ],
                correct: [1]
            }
        ]
    },
    {
        chapter: "PHẦN 2: BƯỚC 3 - HIỂU THẤU ĐÁO CÁC NGUYÊN TẮC THIẾT KẾ GIAO DIỆN VÀ MÀN HÌNH HỢP LÝ",
        questions: [
            {
                question: "Đâu là một yếu tố cần cân nhắc để có một thiết kế hợp lý?",
                options: ["Yếu tố con người.", "Yếu tố tài chính.", "Yếu tố thị trường.", "Yếu tố cạnh tranh."],
                correct: [0]
            },
            {
                question: "Mục tiêu của thiết kế giao diện là gì? (Chọn nhiều đáp án đúng)",
                options: [
                    "Giảm bớt công việc bằng mắt nhìn.",
                    "Giảm bớt các công việc thuộc về trí óc.",
                    "Giảm bớt các công việc về trí nhớ.",
                    "Giảm bớt công việc phải vận động.",
                    "Giảm tối thiểu hoặc loại trừ tất cả các gánh nặng hay chỉ dẫn bị áp đặt bởi công nghệ."
                ],
                correct: [0, 1, 2, 3, 4]
            },
            {
                question: "Trong thiết kế giao diện, 'tín hiệu' là gì?",
                options: [
                    "Những thông tin có ích.",
                    "Những thông tin vô nghĩa.",
                    "Những thông báo lỗi.",
                    "Những yếu tố gây mất tập trung."
                ],
                correct: [0]
            },
            {
                question: "Trong thiết kế giao diện, 'nhiễu' là gì?",
                options: [
                    "Những thông tin có ích.",
                    "Những thông tin vô nghĩa.",
                    "Những thông báo thành công.",
                    "Những yếu tố giúp người dùng tập trung."
                ],
                correct: [1]
            },
            {
                question: "Việc tổ chức các thành phần một cách rõ ràng và có ý nghĩa bị ảnh hưởng bởi những yếu tố nào? (Chọn nhiều đáp án đúng)",
                options: [
                    "Sự nhất quán trong thiết kế.",
                    "Kết cấu trực quan ưa nhìn.",
                    "Sắp xếp thông tin có thứ tự và ngăn nắp: theo quy ước, trình tự sử dụng, tần suất sử dụng, chức năng, tầm quan trọng, từ tổng quát đến cụ thể.",
                    "Trình bày lượng thông tin phù hợp.",
                    "Cân bằng.",
                    "Các phân nhóm và sự sắp xếp các mục trên màn hình."
                ],
                correct: [0, 1, 2, 3, 4, 5]
            },
            {
                question: "Đâu là một trong các phẩm chất của một bố cục ưa nhìn? (Chọn nhiều đáp án đúng)",
                options: [
                    "Đối xứng.",
                    "Đồng đều.",
                    "Có thể dự đoán được.",
                    "Liên tục.",
                    "Tiết kiệm: ít kiểu cách, kỹ thuật hiển thị và màu sắc.",
                    "Đồng nhất.",
                    "Tỷ lệ cân xứng.",
                    "Đơn giản.",
                    "Phân nhóm được: khoảng trắng, đường viền, màu của nền."
                ],
                correct: [0, 1, 2, 3, 4, 5, 6, 7, 8]
            },
            {
                question: "Khi hiển thị thông tin đơn giản và đủ nghĩa, nên sử dụng bao nhiêu họ font?",
                options: [
                    "Không quá 2 họ font, 1 họ font chiếm ưu thế.",
                    "Bất kỳ số lượng họ font nào.",
                    "Chỉ nên sử dụng 1 họ font.",
                    "Nên sử dụng nhiều họ font để tạo sự đa dạng."
                ],
                correct: [0]
            },
            {
                question: "Khi nào nên sử dụng kiểu chữ hỗn hợp (cả chữ hoa và thường)? (Chọn nhiều đáp án đúng)",
                options: [
                    "Chú giải của điều khiển.",
                    "Dữ liệu.",
                    "Thông báo.",
                    "Thông tin chỉ dẫn.",
                    "Mô tả menu.",
                    "Tiêu đề chính."
                ],
                correct: [0, 1, 2, 3, 4]
            },
            {
                question: "Khi nào nên sử dụng chữ toàn hoa?",
                options: [
                    "Tiêu đề, đề mục.",
                    "Nội dung văn bản chính.",
                    "Lời cảnh báo.",
                    "Ghi chú chân trang."
                ],
                correct: [0]
            },
            {
                question: "Khi nào nên sử dụng toàn bộ chữ thường?",
                options: [
                    "Tiêu đề.",
                    "Dữ liệu.",
                    "Các lời cảnh báo.",
                    "Tên nhãn."
                ],
                correct: [2]
            },
            {
                question: "Lượng thông tin hiển thị trên màn hình không nên quá bao nhiêu phần trăm (%)?",
                options: ["50%", "40%", "30%", "20%"],
                correct: [2]
            },
            {
                question: "Đâu là một trong các thành phần ứng dụng màn hình? (Chọn nhiều đáp án đúng)",
                options: [
                    "Đầu đề.",
                    "Các chú giải, tên nhãn.",
                    "Các tiêu đề.",
                    "Các ký hiệu đặc biệt.",
                    "Các chỉ dẫn.",
                    "Các chỉ thị bổ trợ hoàn tất (dd/MM/yyyy)."
                ],
                correct: [0, 1, 2, 3, 4, 5]
            },
            {
                question: "Khi hiển thị đầu ra dữ liệu, các định dạng text và vừa text vừa chữ số nên được căn chỉnh như thế nào?",
                options: ["Căn giữa.", "Căn phải.", "Căn chỉnh trái.", "Không có quy tắc cụ thể."],
                correct: [2]
            },
            {
                question: "Khi hiển thị đầu ra dữ liệu, các danh sách dữ liệu bằng chữ số nên được căn chỉnh như thế nào?",
                options: ["Căn giữa.", "Căn chỉnh phải.", "Căn chỉnh trái.", "Tùy thuộc vào thiết kế."],
                correct: [1]
            },
            {
                question: "Điều gì nên được xem xét khi hiển thị các dữ liệu mà giá trị của chúng là trống hoặc bằng 0?",
                options: [
                    "Không hiển thị.",
                    "Hiển thị với màu sắc khác.",
                    "Hiển thị với ký hiệu đặc biệt.",
                    "Luôn hiển thị."
                ],
                correct: [0]
            },
            {
                question: "Kích thước của một website biến đổi theo những yếu tố nào? (Chọn nhiều đáp án đúng)",
                options: ["Cấu trúc.", "Điều hướng.", "Nội dung thông tin.", "Ngôn ngữ lập trình."],
                correct: [0, 1, 2]
            },
            {
                question: "Người dùng tương tác với web bằng những cách nào? (Chọn nhiều đáp án đúng)",
                options: ["Duyệt web.", "Tìm kiếm thông tin.", "Thu thập thông tin.", "Lập trình web."],
                correct: [0, 1, 2]
            },
            {
                question: "Khi thiết kế giao diện cho hệ thống web, điều gì nên được cân nhắc về công nghệ? (Chọn nhiều đáp án đúng)",
                options: [
                    "Hiểu rõ trình độ hiện tại của công nghệ web.",
                    "Thiết kế theo cấu hình được nhiều người sử dụng nhất.",
                    "Không tùy tiện sử dụng các công nghệ hàng đầu.",
                    "Luôn sử dụng công nghệ mới nhất."
                ],
                correct: [0, 1, 2]
            }
        ]
    },
    {
        chapter: "PHẦN 2: BƯỚC 4 - HỆ THỐNG MENU VÀ LƯỢC ĐỒ ĐIỀU HƯỚNG",
        questions: [
            {
                question: "Đâu là một trong các cấu trúc của menu? (Chọn nhiều đáp án đúng)",
                options: [
                    "Đơn.",
                    "Tuyến tính tuần tự.",
                    "Đồng thời.",
                    "Thứ bậc hoặc tuần tự.",
                    "Liên kết.",
                    "Bẫy sự kiện."
                ],
                correct: [0, 1, 2, 3, 4, 5]
            },
            {
                question: "Đâu là một trong các chức năng của menu? (Chọn nhiều đáp án đúng)",
                options: [
                    "Điều hướng đến một menu mới.",
                    "Thực thi một hành động hoặc một thủ tục.",
                    "Hiển thị thông tin.",
                    "Nhập dữ liệu hoặc các tham số."
                ],
                correct: [0, 1, 2, 3]
            },
            {
                question: "Một menu cần có những thành phần nội dung nào? (Chọn nhiều đáp án đúng)",
                options: ["Ngữ cảnh.", "Tiêu đề.", "Các mô tả lựa chọn.", "Các chỉ dẫn hoàn thành."],
                correct: [0, 1, 2, 3]
            },
            {
                question: "Khi định dạng menu, điều quan trọng nhất là gì?",
                options: ["Nhất quán.", "Đa dạng.", "Sáng tạo.", "Phức tạp."],
                correct: [0]
            },
            {
                question: "Khi hiển thị số lượng lựa chọn của menu, nên tuân thủ nguyên tắc nào?",
                options: [
                    "Luôn hiển thị càng nhiều càng tốt.",
                    "Hiển thị vừa phải số lượng lựa chọn của menu (không có phân nhóm: 4-8, có phân nhóm 18-24).",
                    "Luôn sử dụng thanh cuộn.",
                    "Số lượng lựa chọn không quan trọng."
                ],
                correct: [1]
            },
            {
                question: "Khi thiết kế menu, điều gì nên tránh về việc cuộn?",
                options: ["Không cuộn ngang.", "Cuộn dọc.", "Không cuộn.", "Cuộn tùy ý."],
                correct: [2]
            },
            {
                question: "Khi sắp xếp mục menu theo chiều dọc, chúng nên được sắp xếp như thế nào?",
                options: [
                    "Từ dưới lên và căn lề phải.",
                    "Trên xuống và căn lề trái.",
                    "Ngẫu nhiên.",
                    "Từ giữa ra hai bên."
                ],
                correct: [1]
            },
            {
                question: "Khi sắp xếp mục menu theo chiều ngang, chúng nên được sắp xếp như thế nào?",
                options: [
                    "Từ phải sang trái.",
                    "Theo chiều đọc từ trái sang phải.",
                    "Từ giữa ra hai bên.",
                    "Ngẫu nhiên."
                ],
                correct: [1]
            },
            {
                question: "Khi nào nên sắp xếp mục menu theo thứ tự chữ cái?",
                options: [
                    "Khi có dưới 7 tùy chọn.",
                    "Khi có tần suất xuất hiện rõ ràng.",
                    "Khi có > 8 tùy chọn, danh sách ngắn không có nguyên mẫu hoặc tần suất rõ ràng.",
                    "Luôn luôn sắp xếp theo thứ tự chữ cái."
                ],
                correct: [2]
            },
            {
                question: "Thanh đầu đề menu nên sử dụng loại chữ nào?",
                options: [
                    "Kiểu chữ hỗn hợp theo phong cách tiêu đề.",
                    "Toàn bộ chữ hoa.",
                    "Toàn bộ chữ thường.",
                    "Bất kỳ loại chữ nào."
                ],
                correct: [0]
            },
            {
                question: "Các mô tả lựa chọn menu nên có những đặc điểm nào? (Chọn nhiều đáp án đúng)",
                options: [
                    "Nên là một từ đơn.",
                    "Định hướng theo tác vụ.",
                    "Không giống tên tiêu đề.",
                    "Không đánh số các mục.",
                    "Nên dài và chi tiết."
                ],
                correct: [0, 1, 2, 3]
            },
            {
                question: "Dấu '...' trong menu có ý nghĩa gì?",
                options: [
                    "Mở ra một cửa sổ thứ cấp.",
                    "Thực thi một hành động ngay lập tức.",
                    "Một menu thứ cấp.",
                    "Đóng ứng dụng."
                ],
                correct: [0]
            },
            {
                question: "Dấu '>' trong menu có ý nghĩa gì?",
                options: [
                    "Mở ra một cửa sổ thứ cấp.",
                    "Thực thi một hành động ngay lập tức.",
                    "Một menu thứ cấp.",
                    "Đóng ứng dụng."
                ],
                correct: [2]
            },
            {
                question: "Các giai đoạn của điều hướng website bao gồm những gì? (Chọn nhiều đáp án đúng)",
                options: ["Định hướng.", "Quyết định lộ trình.", "Theo dõi lộ trình.", "Xác nhận điểm đến."],
                correct: [0, 1, 2, 3]
            },
            {
                question: "Đâu là một trong các loại liên kết được cung cấp cho các website? (Chọn nhiều đáp án đúng)",
                options: [
                    "Liên kết trong.",
                    "Liên kết mỏ neo (ví dụ mục lục - khi trang quá dài).",
                    "Liên kết ngoài.",
                    "Liên kết nội bộ."
                ],
                correct: [0, 1, 2]
            },
            {
                question: "Các nhân tố điều hướng trên website bao gồm những gì? (Chọn nhiều đáp án đúng)",
                options: ["Văn bản.", "Hình ảnh.", "Nút lệnh.", "Âm thanh."],
                correct: [0, 1, 2]
            },
            {
                question: "Đâu là một trong các dạng menu đồ họa? (Chọn nhiều đáp án đúng)",
                options: [
                    "Thanh menu (văn bản, nút).",
                    "Menu kéo xổ xuống (pull-down).",
                    "Menu bật lên (pop-up).",
                    "Menu xếp tầng (>).",
                    "Menu biểu tượng (Iconic menu - sử dụng biểu tượng thay vì văn bản).",
                    "Menu hình bánh (pie menu - ví dụ nghe nhạc tăng giảm play).",
                    "Menu bật ra (tear-off menu)."
                ],
                correct: [0, 1, 2, 3, 4, 5, 6]
            }
        ]
    },
    {
        chapter: "PHẦN 2: BƯỚC 5 - LỰA CHỌN LOẠI CỬA SỔ THÍCH HỢP",
        questions: [
            {
                question: "Đâu là một trong các đặc điểm của cửa sổ? (Chọn nhiều đáp án đúng)",
                options: [
                    "Tên/tiêu đề.",
                    "Kích thước.",
                    "Trạng thái (truy cập được/không).",
                    "Phần hiển thị.",
                    "Vị trí liên quan đến đường biên hiển thị.",
                    "Sự sắp xếp tương quan với các cửa sổ khác (liền kề, chồng, tầng).",
                    "Các khả năng điều khiển, những phương thức dùng để thao tác cửa sổ trên màn hình.",
                    "Phần đánh dấu.",
                    "Chức năng, nhiệm vụ."
                ],
                correct: [0, 1, 2, 3, 4, 5, 6, 7, 8]
            },
            {
                question: "Đâu là một trong những điều kiện ràng buộc trong thiết kế cửa sổ? (Chọn nhiều đáp án đúng)",
                options: [
                    "Những cân nhắc mang tính lịch sử.",
                    "Các giới hạn phần cứng.",
                    "Các giới hạn của con người.",
                    "Các giới hạn về ngân sách."
                ],
                correct: [0, 1, 2]
            },
            {
                question: "Thành phần nào sau đây **không** phải là một dạng của cửa sổ thứ cấp được liệt kê trong ngoặc đơn?",
                options: ["Cửa sổ gốc", "Cửa sổ thứ cấp", "Hộp thoại dialog", "Khung"],
                correct: [0]
            },
            {
                question: "Đâu là một trong các thành phần của cửa sổ? (Chọn nhiều đáp án đúng)",
                options: [
                    "Khung.",
                    "Thanh tiêu đề.",
                    "Biểu tượng thanh tiêu đề.",
                    "Các nút chỉnh kích thước cửa sổ.",
                    "Nút what’s this?.",
                    "Thanh menu.",
                    "Thanh trạng thái.",
                    "Thanh cuộn.",
                    "Hộp chia tách.",
                    "Thanh công cụ.",
                    "Vùng lệnh.",
                    "Kẹp kích thước.",
                    "Vùng làm việc."
                ],
                correct: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            },
            {
                question: "Kiểu trình bày cửa sổ 'Xếp kề nhau' phù hợp với trường hợp nào? (Chọn nhiều đáp án đúng)",
                options: [
                    "Tác vụ hoạt động đơn lẻ.",
                    "Dữ liệu cần quan sát đồng thời.",
                    "Yêu cầu ít thao tác cửa sổ.",
                    "Người mới/chưa thành thạo."
                ],
                correct: [0, 1, 2, 3]
            },
            {
                question: "Cửa sổ nào sau đây thường có thanh menu và một số điều khiển cơ bản?",
                options: ["Cửa sổ gốc.", "Cửa sổ thứ cấp.", "Hộp thoại.", "Cửa sổ pop-up."],
                correct: [0]
            },
            {
                question: "Cửa sổ nào sau đây **không** cho phép tương tác với cửa sổ khác cho đến khi hộp thoại hiện tại được hoàn tất?",
                options: ["Modeless.", "Modal.", "Xếp tầng.", "Trải rộng ra."],
                correct: [1]
            },
            {
                question: "Đâu là một trong các phân loại cửa sổ? (Chọn nhiều đáp án đúng)",
                options: [
                    "Cửa sổ gốc.",
                    "Cửa sổ thứ cấp.",
                    "Các bảng thuộc tính và kiểm soát thuộc tính.",
                    "Các hộp thông báo (message box).",
                    "Các cửa sổ bảng màu.",
                    "Các cửa sổ popup."
                ],
                correct: [0, 1, 2, 3, 4, 5]
            },
            {
                question: "Cửa sổ nào thường bắt đầu một tương tác và cung cấp ngữ cảnh cao nhất cho các cửa sổ phục thuộc?",
                options: ["Cửa sổ gốc.", "Cửa sổ thứ cấp.", "Hộp hội thoại.", "Cửa sổ pop-up."],
                correct: [0]
            },
            {
                question: "Cửa sổ nào thường mở rộng tương tác, thu thập hoặc hiển thị thông tin bổ sung?",
                options: ["Cửa sổ gốc.", "Cửa sổ thứ cấp.", "Hộp hội thoại.", "Cửa sổ pop-up."],
                correct: [1]
            },
            {
                question: "Hộp hội thoại (dialog box) thường được sử dụng cho loại thông tin nào?",
                options: [
                    "Những thông tin thường xuyên sử dụng.",
                    "Những thông tin quan trọng nhất.",
                    "Những thông tin không thường xuyên sử dụng hoặc cần tới, những thông tin 'biết thì tốt'.",
                    "Những thông tin bắt buộc phải nhập."
                ],
                correct: [2]
            },
            {
                question: "Nguyên tắc tối ưu về số lượng cửa sổ cần dùng để hoàn thành một mục tiêu là gì?",
                options: [
                    "Tối thiểu hóa số lượng cửa sổ cần dùng (chỉ 1 nếu có thể).",
                    "Mở càng nhiều cửa sổ càng tốt.",
                    "Số lượng cửa sổ không quan trọng.",
                    "Luôn mở ít nhất 3 cửa sổ."
                ],
                correct: [0]
            },
            {
                question: "Với văn bản, kích thước cửa sổ nên là khoảng bao nhiêu dòng?",
                options: ["Khoảng 5 dòng.", "Khoảng 10 dòng.", "Khoảng 12 dòng.", "Khoảng 20 dòng."],
                correct: [2]
            },
            {
                question: "Với thông tin có chữ và số kết hợp, kích thước cửa sổ nên là khoảng bao nhiêu dòng?",
                options: ["Khoảng 5 dòng.", "Khoảng 7 dòng.", "Khoảng 10 dòng.", "Khoảng 15 dòng."],
                correct: [1]
            },
            {
                question: "Khi một cửa sổ được phục hồi, vị trí của nó nên ở đâu?",
                options: ["Trung tâm màn hình.", "Vị trí xuất hiện lần cuối.", "Góc trên bên trái.", "Ngẫu nhiên."],
                correct: [1]
            },
            {
                question: "Khi một cửa sổ mới và vị trí chưa được thiết lập, vị trí của nó nên ở đâu?",
                options: [
                    "Trung tâm màn hình.",
                    "Góc trên bên trái.",
                    "Vị trí chú ý của người xem, thường là vị trí của con trỏ.",
                    "Luôn ở góc dưới bên phải."
                ],
                correct: [2]
            },
            {
                question: "Khi sử dụng đa màn hình, cửa sổ thứ cấp nên được hiển thị ở đâu?",
                options: [
                    "Màn hình riêng biệt.",
                    "Bất kỳ màn hình nào.",
                    "Trên cùng màn hình với cửa sổ gốc.",
                    "Tùy thuộc vào người dùng."
                ],
                correct: [2]
            },
            {
                question: "Đâu là một trong các hành động thường có trên thanh công cụ của trình duyệt web? (Chọn nhiều đáp án đúng)",
                options: [
                    "Back.",
                    "Forward.",
                    "Stop.",
                    "Refresh.",
                    "Home.",
                    "Search.",
                    "Favourites.",
                    "History."
                ],
                correct: [0, 1, 2, 3, 4, 5, 6, 7]
            }
        ]
    },
    {
        chapter: "PHẦN 2: BƯỚC 7 - LỰA CHỌN CÁC ĐIỀU KHIỂN THÍCH HỢP TRÊN MÀN HÌNH",
        questions: [
            {
                question: "Đâu là một trong những chức năng mà các điều khiển trên màn hình có thể thực hiện? (Chọn nhiều đáp án đúng)",
                options: [
                    "Cho phép nhập/lựa chọn một giá trị cụ thể.",
                    "Cho phép thay đổi/chỉnh sửa một giá trị cụ thể.",
                    "Hiển thị một phần văn bản, giá trị/đồ họa cụ thể.",
                    "Làm cho một lệnh được thực thi.",
                    "Có một cửa sổ pop-up theo ngữ cảnh."
                ],
                correct: [0, 1, 2, 3, 4]
            },
            {
                question: "Nguyên lý về điều khiển quy định rằng một điều khiển phải làm việc như thế nào? (Chọn nhiều đáp án đúng)",
                options: [
                    "Nhìn thấy cách nó làm việc và làm việc như cách nó được nhìn thấy.",
                    "Được sử dụng chính xác như thiết kế của nó hướng tới.",
                    "Được trình bày một cách tiêu chuẩn, báo hiệu “khả năng có thể nhập” hoặc “khả năng có thể click”.",
                    "Phức tạp để gây ấn tượng."
                ],
                correct: [0, 1, 2]
            },
            {
                question: "Đâu là một trong các loại điều khiển được phân loại theo tài liệu? (Chọn nhiều đáp án đúng)",
                options: [
                    "Các điều khiển có khả năng thi hành.",
                    "Các điều khiển nhập văn bản/chỉ đọc.",
                    "Các điều khiển lựa chọn.",
                    "Các điều khiển kết hợp nhập/chọn.",
                    "Các điều khiển thao tác khác.",
                    "Các điều khiển tùy biến.",
                    "Các điều khiển trình diễn."
                ],
                correct: [0, 1, 2, 3, 4, 5, 6]
            },
            {
                question: "Khi nào nên đặt các nút lệnh ở bên dưới hoặc bên phải các điều khiển?",
                options: [
                    "Khi chúng không có mối quan hệ với các điều khiển khác.",
                    "Khi có mối quan hệ ngẫu nhiên với một/một nhóm các điều khiển.",
                    "Luôn đặt ở phía trên.",
                    "Luôn đặt ở bên trái."
                ],
                correct: [1]
            },
            {
                question: "Dấu '...' trên nút lệnh có ý nghĩa gì?",
                options: [
                    "Dẫn đến hộp thoại xếp tầng.",
                    "Thực hiện hành động ngay lập tức.",
                    "Mở một menu.",
                    "Chỉ ra lỗi."
                ],
                correct: [0]
            },
            {
                question: "Dấu '>' trên nút lệnh có ý nghĩa gì?",
                options: [
                    "Dẫn đến hộp thoại xếp tầng.",
                    "Thực hiện hành động ngay lập tức.",
                    "Mở một menu.",
                    "Chỉ ra lỗi."
                ],
                correct: [2]
            },
            {
                question: "Dấu '>>' trên nút lệnh có ý nghĩa gì?",
                options: [
                    "Dẫn đến hộp thoại xếp tầng.",
                    "Thực hiện hành động ngay lập tức.",
                    "Mở một menu.",
                    "Chỉ ra lỗi."
                ],
                correct: [3]
            },
            {
                question: "Cách sử dụng thanh công cụ hiệu quả là gì? (Chọn nhiều đáp án đúng)",
                options: [
                    "Cung cấp truy cập nhanh, dễ dàng đến những lệnh hoặc các tùy chọn được sử dụng thường xuyên.",
                    "Gọi ứng dụng nhỏ trong phạm vi một ứng dụng nào đó.",
                    "Sử dụng thay thế các mục nào đó của menu.",
                    "Hiển thị tất cả các tính năng của ứng dụng."
                ],
                correct: [0, 1, 2]
            },
            {
                question: "'Điều khiển nhập văn bản' thường được dùng để làm gì?",
                options: [
                    "Hiển thị thông tin cố định.",
                    "Nhập hoặc chỉnh sửa bằng bàn phím (text box không được bảo vệ).",
                    "Lựa chọn giá trị từ danh sách.",
                    "Kích hoạt lệnh."
                ],
                correct: [1]
            },
            {
                question: "'Điều khiển chỉ đọc' thường được dùng để làm gì?",
                options: [
                    "Hiển thị text hoặc các giá trị đang được thể hiện để đọc hoặc chỉ cho các mục đích hiển thị (text box được bảo vệ).",
                    "Cho phép nhập liệu.",
                    "Thao tác trực tiếp.",
                    "Tạo biểu đồ."
                ],
                correct: [0]
            },
            {
                question: "Khi sử dụng Radio button & checkbox, số lượng các tùy chọn không nên quá bao nhiêu?",
                options: ["5", "8", "10", "12"],
                correct: [1]
            },
            {
                question: "'Tooltip' cung cấp loại thông tin gì?",
                options: [
                    "Thông tin mô tả sơ bộ về một điều khiển khi chức năng của nó phải được nhận biết một cách nhanh chóng.",
                    "Thông báo lỗi.",
                    "Lời cảnh báo.",
                    "Thông tin chi tiết về hệ thống."
                ],
                correct: [0]
            },
            {
                question: "'Balloon tip' cung cấp loại thông tin gì?",
                options: [
                    "Thông tin mô tả sơ bộ về một điều khiển.",
                    "Thông báo lỗi.",
                    "Thông tin mô tả hoặc thông tin trạng thái về một thành phần của màn hình.",
                    "Lời nhắc nhập liệu."
                ],
                correct: [2]
            },
            {
                question: "'Preview biểu tượng' sử dụng gì để chỉ ra trừu tượng kết quả lựa chọn?",
                options: ["Bitmap cố định.", "Bitmap biến đổi.", "Dữ liệu mẫu.", "Bản sao chính xác."],
                correct: [0]
            },
            {
                question: "'Preview trừu tượng' sử dụng gì để chỉ ra trừu tượng kết quả lựa chọn cụ thể?",
                options: ["Bitmap cố định.", "Bitmap biến đổi.", "Dữ liệu mẫu.", "Bản sao chính xác."],
                correct: [1]
            },
            {
                question: "'Preview mẫu' hiển thị điều gì?",
                options: ["Biểu tượng cố định.", "Bitmap biến đổi.", "Dữ liệu mẫu, chỉ ra chính xác kết quả lựa chọn.", "Bản sao xấp xỉ."],
                correct: [2]
            },
            {
                question: "'Preview bản sao xấp xỉ' là gì?",
                options: [
                    "Biểu diễn chính xác kết quả lựa chọn.",
                    "Biểu diễn xấp xỉ kết quả của lựa chọn.",
                    "Biểu diễn dữ liệu mẫu.",
                    "Biểu diễn biểu tượng."
                ],
                correct: [1]
            },
            {
                question: "'Preview bản sao chính xác' là gì?",
                options: [
                    "Biểu diễn chính xác kết quả lựa chọn từ dữ liệu cụ thể của người sử dụng.",
                    "Biểu diễn xấp xỉ kết quả của lựa chọn.",
                    "Biểu diễn dữ liệu mẫu.",
                    "Biểu diễn biểu tượng."
                ],
                correct: [0]
            }
        ]
    },
    {
        chapter: "PHẦN 2: BƯỚC 8 - VIẾT VĂN BẢN VÀ THÔNG BÁO RÕ RÀNG",
        questions: [
            {
                question: "'Tính dễ đọc' được định nghĩa là gì?",
                options: [
                    "Mức độ hấp dẫn về mặt hình ảnh của văn bản.",
                    "Mức độ có thể hiểu được đoạn văn xuôi dựa trên sự tổ hợp của các từ và các câu trong đoạn văn đó.",
                    "Tốc độ người dùng có thể đọc văn bản.",
                    "Số lượng từ trong một đoạn văn."
                ],
                correct: [1]
            },
            {
                question: "Đâu là yếu tố ảnh hưởng đến tính dễ đọc của văn bản? (Chọn nhiều đáp án đúng)",
                options: ["Tổ chức.", "Cách bố trí.", "Định dạng thông tin.", "Màu sắc của văn bản."],
                correct: [0, 1, 2]
            },
            {
                question: "Đâu là yếu tố quyết định đến tính dễ đọc của văn bản? (Chọn nhiều đáp án đúng)",
                options: [
                    "Độ dài từ.",
                    "Tính phổ biến của từ.",
                    "Độ dài câu.",
                    "Số lượng các âm tiết."
                ],
                correct: [0, 1, 2, 3]
            },
            {
                question: "Nguyên tắc chỉ dẫn tính dễ đọc khi viết văn bản là gì? (Chọn nhiều đáp án đúng)",
                options: [
                    "Hãy viết ở trình độ dễ đọc Dưới trình độ kỹ năng đọc của các đối tượng định hướng tới.",
                    "Áp dụng tất cả các nguyên lý khác để viết và trình bày văn bản rõ ràng.",
                    "Viết ở trình độ cao nhất có thể.",
                    "Không quan tâm đến trình độ đọc của người dùng."
                ],
                correct: [0, 1]
            },
            {
                question: "'Thông báo' được định nghĩa là gì?",
                options: [
                    "Là đầu mối giao tiếp được cung cấp trên màn hình với người sử dụng.",
                    "Là thông tin quảng cáo.",
                    "Là tài liệu hướng dẫn sử dụng.",
                    "Là dữ liệu hệ thống."
                ],
                correct: [0]
            },
            {
                question: "Đâu là một trong các loại thông báo? (Chọn nhiều đáp án đúng)",
                options: ["Các thông báo hệ thống.", "Các thông báo chỉ dẫn.", "Các thông báo quảng cáo.", "Các thông báo cá nhân."],
                correct: [0, 1]
            },
            {
                question: "Hộp thông báo nên cung cấp mô tả như thế nào về nguyên nhân dẫn đến sự xuất hiện của nó?",
                options: [
                    "Dài và chi tiết.",
                    "Rõ ràng và ngắn gọn (không quá 2-3 dòng, nội dung đặt ở giữa).",
                    "Chỉ gồm mã lỗi.",
                    "Chỉ là một icon."
                ],
                correct: [1]
            },
            {
                question: "Font chữ cho văn bản nên như thế nào?",
                options: [
                    "Trơn và đơn giản, kích thước 12-14 point.",
                    "Phức tạp và nhiều màu sắc.",
                    "Kích thước nhỏ để tiết kiệm không gian.",
                    "Bất kỳ font nào."
                ],
                correct: [0]
            },
            {
                question: "Văn bản nên được căn lề như thế nào và có gạch nối từ không?",
                options: [
                    "Căn lề phải, có gạch nối các từ.",
                    "Căn giữa, có gạch nối các từ.",
                    "Căn lề trái, không gạch nối các từ.",
                    "Căn đều hai bên, không gạch nối các từ."
                ],
                correct: [2]
            },
            {
                question: "Để dễ đọc và rõ ràng hơn, nên làm gì với khoảng cách dòng?",
                options: [
                    "Giảm khoảng cách dòng.",
                    "Tăng khoảng cách dòng.",
                    "Không thay đổi khoảng cách dòng.",
                    "Khoảng cách dòng không ảnh hưởng đến tính dễ đọc."
                ],
                correct: [1]
            },
            {
                question: "Phong cách viết văn bản trên web nên như thế nào? (Chọn nhiều đáp án đúng)",
                options: [
                    "Sử dụng một phong cách phản ánh nhu cầu của người sử dụng trang web.",
                    "Sử dụng tổ chức kim tự tháp ngược.",
                    "Ngắn gọn, chỉ sử dụng khoảng một nửa số từ của văn bản thông thường.",
                    "Dài dòng và chi tiết."
                ],
                correct: [0, 1, 2]
            },
            {
                question: "Khi nào nên đặt các liên kết trong văn bản?",
                options: [
                    "Ở giữa đoạn văn.",
                    "Ở đầu hoặc cuối đoạn văn hoặc các phần của văn bản.",
                    "Rải rác khắp văn bản.",
                    "Không nên đặt liên kết trong văn bản."
                ],
                correct: [1]
            },
            {
                question: "Các thông báo lỗi trên Web nên cung cấp thông tin như thế nào? (Chọn nhiều đáp án đúng)",
                options: [
                    "Có ích và chính xác cho: Dữ liệu không được chọn, nhập, chèn một cách đầy đủ và chính xác.",
                    "Có ích và chính xác cho: Các yêu cầu đối với các tài liệu không tồn tại hoặc không thể tìm.",
                    "Hiển thị lại thông báo trên trang tương ứng.",
                    "Hiển thị thông báo lỗi một cách trực quan, gây chú ý."
                ],
                correct: [0, 1, 2, 3]
            }
        ]
    },
    {
        chapter: "PHẦN 2: BƯỚC 9 - CUNG CẤP THÔNG TIN PHẢN HỒI, HƯỚNG DẪN VÀ HỖ TRỢ HIỆU QUẢ",
        questions: [
            {
                question: "Thời gian phản hồi thích hợp cho tác vụ yêu cầu tư duy liên tục và tập trung cao là bao lâu?",
                options: ["Dưới 1-2 giây.", "Dưới 2-4 giây.", "Từ 4-15 giây.", "Trên 15 giây."],
                correct: [0]
            },
            {
                question: "Thời gian phản hồi thích hợp cho tác vụ không cần tập trung cao, yêu cầu bộ nhớ ngắn hạn vừa phải bị áp đặt là bao lâu?",
                options: ["Dưới 1-2 giây.", "Dưới 2-4 giây.", "Từ 4-15 giây.", "Trên 15 giây."],
                correct: [1]
            },
            {
                question: "Thời gian phản hồi thích hợp cho tác vụ tồn tại, yêu cầu bộ nhớ ngắn hạn tối thiểu bị áp đặt là bao lâu?",
                options: ["Dưới 1-2 giây.", "Dưới 2-4 giây.", "Từ 4-15 giây.", "Trên 15 giây."],
                correct: [2]
            },
            {
                question: "Thời gian phản hồi thích hợp khi người sử dụng có thể làm việc khác và trở lại khi thuận tiện là bao lâu?",
                options: ["Dưới 1-2 giây.", "Dưới 2-4 giây.", "Từ 4-15 giây.", "Trên 15 giây."],
                correct: [3]
            },
            {
                question: "Thời gian tải về một trang web nên tối đa là bao lâu?",
                options: ["5s.", "10s.", "15s.", "20s."],
                correct: [1]
            },
            {
                question: "Để tối ưu thời gian tải trang web, hình ảnh nên có đặc điểm gì? (Chọn nhiều đáp án đúng)",
                options: [
                    "Nhỏ.",
                    "Có các thông số ảnh thấp.",
                    "Có thể tái sử dụng.",
                    "Có chứa các thông số chiều cao và chiều rộng theo pixel trong một thẻ nhãn."
                ],
                correct: [0, 1, 2, 3]
            },
            {
                question: "Mức đánh giá thời gian phản hồi của một trang web là 'cao' khi thời gian tải là bao nhiêu?",
                options: ["<= 5s.", "5-10s.", ">10s.", "Không có quy định."],
                correct: [0]
            },
            {
                question: "Mức đánh giá thời gian phản hồi của một trang web là 'trung bình' khi thời gian tải là bao nhiêu?",
                options: ["<= 5s.", "5-10s.", ">10s.", "Không có quy định."],
                correct: [1]
            },
            {
                question: "Mức đánh giá thời gian phản hồi của một trang web là 'thấp' khi thời gian tải là bao nhiêu?",
                options: ["<= 5s.", "5-10s.", ">10s.", "Không có quy định."],
                correct: [2]
            },
            {
                question: "Khi thời gian trễ dưới 10 giây, nên đưa ra tín hiệu gì cho đến khi thao tác hoàn thành?",
                options: [
                    "Thanh chỉ báo tiến độ.",
                    "Tín hiệu 'busy'.",
                    "Ước tính thời gian chờ.",
                    "Không cần tín hiệu."
                ],
                correct: [1]
            },
            {
                question: "Khi thời gian trễ từ 10 giây đến 1 phút, nên làm gì? (Chọn nhiều đáp án đúng)",
                options: [
                    "Hiển thị một con lăn có vạch xoắn khác màu hoặc đối tượng sinh động khác có kích thước lớn.",
                    "Thêm một thanh chỉ báo tiến độ, thông báo lượng thời gian hoàn thành hoặc thời gian đã trôi qua.",
                    "Chia nhỏ các thao tác.",
                    "Cho phép người sử dụng bắt đầu hoạt động mới."
                ],
                correct: [0, 1]
            },
            {
                question: "Khi thời gian trễ trên 1 phút, nên làm gì? (Chọn nhiều đáp án đúng)",
                options: [
                    "Hiển thị ước tính về thời gian phải chờ.",
                    "Hiển thị thanh chỉ báo tiến độ, thông báo lượng phần trăm hoàn thành, thông báo về thời gian đã trôi qua.",
                    "Khi thao tác kéo dài hoàn tất, đưa ra xác nhận đã hoàn tất.",
                    "Chia nhỏ các thao tác thành các tác vụ nhỏ hơn và cung cấp các chỉ báo tiến độ cho mỗi tác vụ.",
                    "Cho phép người sử dụng bắt đầu hoạt động mới trong khi chờ đợi."
                ],
                correct: [0, 1, 2, 3, 4]
            },
            {
                question: "'Lỗi sơ suất' là loại lỗi gì?",
                options: [
                    "Kết quả của hành vi tự động xảy ra, không theo ý muốn.",
                    "Kết quả từ việc hình thành mô hình hoặc mục tiêu sai.",
                    "Lỗi do phần cứng.",
                    "Lỗi do phần mềm."
                ],
                correct: [0]
            },
            {
                question: "'Lỗi sai lầm' là loại lỗi gì?",
                options: [
                    "Kết quả của hành vi tự động xảy ra, không theo ý muốn.",
                    "Kết quả từ việc hình thành mô hình hoặc mục tiêu sai.",
                    "Lỗi do phần cứng.",
                    "Lỗi do phần mềm."
                ],
                correct: [1]
            },
            {
                question: "Để phòng ngừa vấn đề, điều gì nên được thực hiện với các lựa chọn không thể áp dụng được?",
                options: ["Vô hiệu hóa.", "Ẩn đi.", "Highlight.", "Xóa bỏ."],
                correct: [0]
            },
            {
                question: "Để phòng ngừa vấn đề, trước khi một hành động mang tính phá hủy được thực hiện, hệ thống nên làm gì? (Chọn nhiều đáp án đúng)",
                options: [
                    "Yêu cầu confirm hành động.",
                    "Cho phép người sử dụng có kinh nghiệm vô hiệu hóa các yêu cầu khẳng định ít quan trọng hơn.",
                    "Tự động thực hiện.",
                    "Đóng ứng dụng."
                ],
                correct: [0, 1]
            },
            {
                question: "Khi thẩm định tính hợp lệ các mục nhập, nên thực hiện ở các cấp độ nào? (Chọn nhiều đáp án đúng)",
                options: [
                    "Ở cấp độ ký tự.",
                    "Ở cấp độ điều khiển.",
                    "Khi giao dịch hoàn thành hoặc cửa sổ đóng lại.",
                    "Khi hệ thống khởi động."
                ],
                correct: [0, 1, 2]
            },
            {
                question: "Để lại cửa sổ mở khi có lỗi giúp ích gì?",
                options: [
                    "Gây khó chịu cho người dùng.",
                    "Đơn giản hóa việc sửa lỗi.",
                    "Giúp duy trì ngữ cảnh và tạo điều kiện cho việc sửa lỗi.",
                    "Tiết kiệm tài nguyên hệ thống."
                ],
                correct: [2]
            },
            {
                question: "Khi sửa chữa vấn đề, hệ thống nên cố gắng làm gì với công việc của người sử dụng?",
                options: [
                    "Hủy bỏ tất cả.",
                    "Giữ được càng nhiều công việc của người sử dụng càng tốt.",
                    "Tự động sửa chữa.",
                    "Đóng ứng dụng."
                ],
                correct: [1]
            },
            {
                question: "Khi thẩm định tính hợp lệ ở cấp độ cửa sổ và có lỗi, hệ thống nên làm gì? (Chọn nhiều đáp án đúng)",
                options: [
                    "Sử dụng hộp thoại không theo kiểu để hiển thị một danh sách lỗi.",
                    "Làm nổi bật lỗi đầu tiên trong danh sách.",
                    "Đặt con trỏ tại điều khiển đầu tiên có lỗi.",
                    "Cho phép sửa chữa một lỗi và tiếp tục cho lỗi tiếp theo."
                ],
                correct: [0, 1, 2, 3]
            },
            {
                question: "Tài liệu hướng dẫn có thể được mô tả ở những dạng nào? (Chọn nhiều đáp án đúng)",
                options: [
                    "Dạng bản in ra giấy của hệ thống.",
                    "Tài liệu trực tuyến.",
                    "Đào tạo dựa trên máy tính, thông báo hướng dẫn hoặc nhắc nhở.",
                    "Thông báo hệ thống."
                ],
                correct: [0, 1, 2, 3]
            },
            {
                question: "Người dùng tương tác với tài liệu qua mấy giai đoạn?",
                options: ["1", "2", "3", "4"],
                correct: [2]
            },
            {
                question: "Đâu là một trong các hình thức trợ giúp? (Chọn nhiều đáp án đúng)",
                options: [
                    "Các chỉ dẫn hoặc lời nhắc.",
                    "Các phương tiện trợ giúp.",
                    "Trợ giúp theo ngữ cảnh.",
                    "Trợ giúp tham khảo.",
                    "Các thuật sĩ.",
                    "Các gợi ý hoặc lời mách.",
                    "Trợ giúp định hướng theo tác vụ."
                ],
                correct: [0, 1, 2, 3, 4, 5, 6]
            }
        ]
    },
    {
        chapter: "PHẦN 2: BƯỚC 11 - KIẾN TẠO ĐỒ HỌA, BIỂU TƯỢNG VÀ HÌNH ẢNH CÓ Ý NGHĨA",
        questions: [
            {
                question: "Biểu tượng là gì?",
                options: [
                    "Là những hình vẽ tượng trưng thường được dùng để biểu diễn các đối tượng và hành động mà người sử dụng có thể tương tác hoặc thao tác với chúng. Ngoài ra còn để nhấn mạnh những thông tin quan trọng.",
                    "Là những hình ảnh trang trí không có ý nghĩa.",
                    "Là những văn bản giải thích.",
                    "Là những con số."
                ],
                correct: [0]
            },
            {
                question: "Theo Marcus, 'biểu tượng (icon)' là loại hình vẽ như thế nào?",
                options: [
                    "Một dấu hiệu bị gây ra bởi thứ mà nó sẽ dẫn chiếu tới.",
                    "Một dấu hiệu có thể hoàn toàn tùy ý theo hình dáng.",
                    "Những thứ trông tương tự với hàm ý nó mang.",
                    "Một hình ảnh trừu tượng."
                ],
                correct: [2]
            },
            {
                question: "Theo Marcus, 'chỉ dẫn (index)' là loại hình vẽ như thế nào?",
                options: [
                    "Một dấu hiệu bị gây ra bởi thứ mà nó sẽ dẫn chiếu tới (ví dụ thấy cột cờ -> Hà Nội).",
                    "Những thứ trông tương tự với hàm ý nó mang.",
                    "Một dấu hiệu có thể hoàn toàn tùy ý theo hình dáng.",
                    "Một hình ảnh trừu tượng."
                ],
                correct: [0]
            },
            {
                question: "Theo Marcus, 'ký hiệu (symbol)' là loại hình vẽ như thế nào?",
                options: [
                    "Những thứ trông tương tự với hàm ý nó mang.",
                    "Một dấu hiệu bị gây ra bởi thứ mà nó sẽ dẫn chiếu tới.",
                    "Một dấu hiệu có thể hoàn toàn tùy ý theo hình dáng.",
                    "Một hình ảnh trừu tượng."
                ],
                correct: [2]
            },
            {
                question: "Theo Rogers (1989), 'tương đồng' là loại hình ảnh như thế nào?",
                options: [
                    "Một hình ảnh trông giống hàm ý nó mang.",
                    "Một hình ảnh trừu tượng thể hiện một sự vật, hiện tượng.",
                    "Một hình ảnh minh họa vật mẫu hoặc đặc tính của một sự vật hiện tượng.",
                    "Một hình ảnh hoàn toàn tùy ý theo hình dạng của nó mà ý nghĩa của nó cần phải được học."
                ],
                correct: [0]
            },
            {
                question: "Theo Rogers (1989), 'tượng trưng' là loại hình ảnh như thế nào?",
                options: [
                    "Một hình ảnh trông giống hàm ý nó mang.",
                    "Một hình ảnh trừu tượng thể hiện một sự vật, hiện tượng.",
                    "Một hình ảnh minh họa vật mẫu hoặc đặc tính của một sự vật hiện tượng.",
                    "Một hình ảnh hoàn toàn tùy ý theo hình dạng của nó mà ý nghĩa của nó cần phải được học."
                ],
                correct: [1]
            },
            {
                question: "Theo Rogers (1989), 'mẫu' là loại hình ảnh như thế nào?",
                options: [
                    "Một hình ảnh trông giống hàm ý nó mang.",
                    "Một hình ảnh trừu tượng thể hiện một sự vật, hiện tượng.",
                    "Một hình ảnh minh họa vật mẫu hoặc đặc tính của một sự vật hiện tượng.",
                    "Một hình ảnh hoàn toàn tùy ý theo hình dạng của nó mà ý nghĩa của nó cần phải được học."
                ],
                correct: [2]
            },
            {
                question: "Theo Rogers (1989), 'tùy ý' là loại hình ảnh như thế nào?",
                options: [
                    "Một hình ảnh trông giống hàm ý nó mang.",
                    "Một hình ảnh trừu tượng thể hiện một sự vật, hiện tượng.",
                    "Một hình ảnh minh họa vật mẫu hoặc đặc tính của một sự vật hiện tượng.",
                    "Một hình ảnh hoàn toàn tùy ý theo hình dạng của nó mà ý nghĩa của nó cần phải được học."
                ],
                correct: [3]
            },
            {
                question: "Theo Rogers (1989), 'tương tự' là loại hình ảnh như thế nào?",
                options: [
                    "Một hình ảnh trông giống hàm ý nó mang.",
                    "Một hình ảnh trừu tượng thể hiện một sự vật, hiện tượng.",
                    "Một hình ảnh minh họa vật mẫu hoặc đặc tính của một sự vật hiện tượng.",
                    "Một hình ảnh hoàn toàn tùy ý theo hình dạng của nó mà ý nghĩa của nó cần phải được học.",
                    "Một hình ảnh liên quan về mặt vật lý hoặc ngữ nghĩa với sự vật hiện tượng."
                ],
                correct: [4]
            },
            {
                question: "Các đặc tính nào của biểu tượng xác định sự hiệu quả và tính tiện dùng của nó? (Chọn nhiều đáp án đúng)",
                options: [
                    "Cú pháp: cấu trúc vật lý.",
                    "Ngữ nghĩa: ý nghĩa.",
                    "Tính thực tế: cách được tạo ra và được mô tả.",
                    "Kích thước."
                ],
                correct: [0, 1, 2]
            },
            {
                question: "Đâu là một trong các nhân tố ảnh hưởng đến tính tiện dùng của biểu tượng? (Chọn nhiều đáp án đúng)",
                options: [
                    "Quen thuộc.",
                    "Sáng sủa và rõ ràng.",
                    "Đơn giản.",
                    "Nhất quán.",
                    "Trực tiếp.",
                    "Hiệu quả.",
                    "Dễ phân biệt.",
                    "Ngữ cảnh trong đó biểu tượng được sử dụng.",
                    "Sự mong đợi của người sử dụng.",
                    "Tính phức tạp của tác vụ."
                ],
                correct: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
                question: "Biểu tượng được coi là thành công khi nào? (Chọn nhiều đáp án đúng)",
                options: [
                    "Khác biệt với tất cả các biểu tượng khác.",
                    "Thể hiện rõ ràng cái mà nó thực hiện hoặc đại diện cho.",
                    "Có khả năng nhận ra được ngay cả khi ở kích thước dưới 16px.",
                    "Nhìn hợp lý cả ở dạng trắng đen cũng như dạng có màu sắc."
                ],
                correct: [0, 1, 2, 3]
            },
            {
                question: "Đâu là một trong các bước trong quá trình thiết kế biểu tượng? (Chọn nhiều đáp án đúng)",
                options: [
                    "Xác định mục đích và công dụng của biểu tượng.",
                    "Thu thập, đánh giá, và phác thảo các ý tưởng.",
                    "Vẽ đen trắng.",
                    "Vẽ ra bằng cách sử dụng tiện ích chỉnh sửa biểu tượng hoặc một gói phần mềm vẽ.",
                    "Kiểm thử với người sử dụng về sự trông đợi, sự nhận thức, sự tiếp thu.",
                    "Kiểm thử tính rõ ràng.",
                    "Đăng ký các biểu tượng mới trong bảng đăng ký của hệ thống."
                ],
                correct: [0, 1, 2, 3, 4, 5, 6]
            },
            {
                question: "Một biểu tượng bao gồm những thành phần nào? (Chọn nhiều đáp án đúng)",
                options: ["Nền.", "Ảnh.", "Nhãn.", "Âm thanh."],
                correct: [0, 1, 2]
            }
        ]
    },
    {
        chapter: "PHẦN 2: BƯỚC 12 - CHỌN MÀU PHÙ HỢP",
        questions: [
            {
                question: "Màu sắc là sự kết hợp của những yếu tố nào? (Chọn nhiều đáp án đúng)",
                options: ["Sắc tố.", "Sắc độ.", "Độ sáng.", "Độ tương phản."],
                correct: [0, 1, 2]
            },
            {
                question: "Đâu là một trong các gam màu sắc? (Chọn nhiều đáp án đúng)",
                options: [
                    "Màu lạnh.",
                    "Màu nóng.",
                    "Màu tương phản.",
                    "Màu tương đồng.",
                    "Màu vô sắc.",
                    "Màu bổ túc.",
                    "Màu sắc độ.",
                    "Màu sắc điệu."
                ],
                correct: [0, 1, 2, 3, 4, 5, 6, 7]
            },
            {
                question: "Nên sử dụng màu sắc để làm gì? (Chọn nhiều đáp án đúng)",
                options: [
                    "Hỗ trợ định dạng màn hình.",
                    "Là mã màu trực quan để xác định thành phần bộ phận của màn hình.",
                    "Là mã màu trực quan để xác định cấu trúc logic của các ý tưởng, quy trình hoặc trình tự.",
                    "Là mã màu trực quan để xác định các nguồn thông tin.",
                    "Là mã màu trực quan để xác định tình trạng của thông tin.",
                    "Chân thực các đối tượng tự nhiên.",
                    "Tăng sự lôi cuốn trên màn hình."
                ],
                correct: [0, 1, 2, 3, 4, 5, 6]
            },
            {
                question: "Đâu là một trong các vấn đề có thể xảy ra khi sử dụng màu sắc? (Chọn nhiều đáp án đúng)",
                options: [
                    "Khả năng thu hút chú ý cao.",
                    "Gây nhiễu vào việc sử dụng các màn hình khác.",
                    "Độ nhạy cảm khác nhau của mắt đối với các màu sắc khác nhau.",
                    "Những khuyết tật về nhìn màu.",
                    "Ý nghĩa màu sắc.",
                    "Những khác biệt giữa chế độ kỷ luật và nền văn hóa.",
                    "Sự hấp dẫn của màu sắc cũng mang tính chủ quan.",
                    "Việc sử dụng đúng màu sắc đòi hỏi phân tích về những kỳ vọng và những trải nghiệm của người xem màn hình."
                ],
                correct: [0, 1, 2, 3, 4, 5, 6, 7]
            }
        ]
    },
    {
        chapter: "PHẦN 2: BƯỚC 13 - TỔ CHỨC, BỐ TRÍ CÁC TRANG VÀ CỬA SỔ",
        questions: [
            {
                question: "Đâu là một trong các nguyên tắc chỉ dẫn chung khi tổ chức, bố trí các trang và cửa sổ? (Chọn nhiều đáp án đúng)",
                options: [
                    "Khối lượng thông tin.",
                    "Tổ chức và luồng thông tin.",
                    "Tổ chức dựa trên mức độ tương quan giữa các dữ liệu hoặc các thông tin với nhau.",
                    "Cung cấp theo một trật tự.",
                    "Sắp đặt điều khiển.",
                    "Sự điều hướng.",
                    "Thẩm mỹ.",
                    "Ngăn ngừa sự lộn xộn trực quan.",
                    "Trọng tâm và nhấn mạnh.",
                    "Sự nhất quán."
                ],
                correct: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
                question: "Đâu là một trong các nguyên tắc chỉ dẫn về tổ chức màn hình? (Chọn nhiều đáp án đúng)",
                options: ["Tạo các phân nhóm.", "Các đường bao.", "Các điều khiển phụ thuộc.", "Căn chỉnh và cân đối."],
                correct: [0, 1, 2, 3]
            },
            {
                question: "Điều hướng điều khiển có thể được thực hiện bằng những cách nào? (Chọn nhiều đáp án đúng)",
                options: ["Phím tab/phím mũi tên.", "Các nút lệnh.", "Các phím tương đương.", "Bằng giọng nói."],
                correct: [0, 1, 2]
            },
            {
                question: "Đâu là một trong các phẩm chất phải có để một trang web có thiết kế tốt? (Chọn nhiều đáp án đúng)",
                options: [
                    "Tính logic và nhất quán.",
                    "Dễ hiểu.",
                    "Có thể đọc lướt nhanh.",
                    "Cân bằng hợp lý.",
                    "Nhiều màu sắc."
                ],
                correct: [0, 1, 2, 3]
            }
        ]
    }
];