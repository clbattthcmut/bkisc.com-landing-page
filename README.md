# bkisc.com-landing-page

## Roadmap

### Current

-   [x] Pages: Welcome
-   [ ] Pages: About
-   [x] Pages: Contact
-   [ ] Pages: Sponsor
-   [ ] Pages: Recruitment

### Future

-   [ ] Pages: members (Consider move to another page)
-   [ ] Academic profile for teacher advisor (embed google scholar profile https://scholar.google.com/citations?user=ha11OwIAAAAJ&hl=vi)

## Start project

```bash
git clone --recurse-submodules -j8 https://github.com/clbattthcmut/bkisc.com-landing-page.git
cd bkisc.com-landing-page
```

### Install locally

#### Requirements

-   Golang
-   Hugo (extended edition)

```bash
hugo server -D -w
```

### Using docker

#### Requirements

-   Docker, docker compose

```bash
docker compose up server
```

## Setup dev environment

-   IDE: recommend using VSCode
-   EditorConfig for your IDE
-   Node.js and npm (for Prettier)

```bash
npm install
```

## Contribute

Để contribute, mọi người cần lưu ý đọc kỹ trước về **[Hugo's loopkup order](https://gohugo.io/templates/lookup-order/)** và **[Hugo's Variables and Params](https://gohugo.io/variables/)**

Những folder mà mọi người cần chú ý:

1. _**/assets/**_: đây sẽ là folder chứa các plugin, js, scss và ảnh.
2. _**/config/**_: đây sẽ là folder chỉnh sửa và định nghĩa các params và variable được dùng trong các template. Hiện nếu không có gì cần thêm vào thì mọi ngườ có thể chinh sửa ở thư mục _./\_default/_.
3. _**/content/**_: đây sẽ là folder chỉnh sửa nội dung và các variables được sử dụng trong các template. Các content được render như thế nào, ở template nào thì mọi người có thể đọc lại về **[Hugo's loopkup order](https://gohugo.io/templates/lookup-order/)**.
4. _**/layouts/**_: đây sẽ là folder chứa các template sử dụng các params và variables ở 2 thư mục _/config_ và _/content_.

Các bước contribute:

1. Clone repo về máy local
2. Tạo một branch khác với tên của mình (ví dụ: hoangREALER sẽ tạo branch `hoangREALER` thông qua lệnh `git branch hoangREALER`)
3. Checkout vào nhánh vừa tạo thông qua lệnh `git checkout <tên nhánh vừa tạo>`
4. Chỉnh sửa, thay đổi, và thêm thắt cho branch của mình
5. Git add và commit phần thay đổi của mình
6. Khi đã sẵn sàng thì hãy push lên. Tuyệt đối không push thẳng lên main.

### Thanks các contributor :3.
