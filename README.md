# REST API - NEWS DATABASE

Aplikasi server news database Postdana untuk keperluan get dan update berita terkini dari api pasardana.

## Install

npm install

## Run the server

npm start

# REST API

## Get All Data

### Request

`GET /api/`

    curl -i -H 'Accept: application/json' http://localhost:8000/api/

### Response

    {
        "totalItems": 33,
        "news" : [
            {
            "id": 136,
            "idnews": 47581,
            "title": "Indeks Nikkei Merosot 1,89 Persen",
            "news": "<p><strong>Pasardana.id</strong> - Indeks Nikkei 225 di Bursa Efek Tokyo, Jepang, merosot 508,36 poin, atau sekitar 1,89 persen, pada Kamis (19/5/2022), menjadi 26.402,84. Indeks Topix merosot 1,30 persen menjadi 1.860,28.</p>\n<p>Seperti diwartakan <em>Reuters, </em>indeks Nikkei merosot mengikuti pergerakan saham di Wall Street yang dipicu tergelincirnya saham perusahaan ritel Target.</p>\n<p>Saham perusahaan pengiriman barang Yamato Holdings memimpin pelemahan hari ini dengan terjun 4,87 persen. Saham perusahaan pengapalan Nippon Yusen KK dan Kawasaki Kisen Kaisha masing-masing anjlok 4,84 persen dan 4,56 persen.</p>\n<p>Saham perusahaan ritel Seven &amp;amp; I Holdings merosot 3,95 persen. Saham perusahaan otomotif Nissan Motor dan perusahaan <em>e-commerce </em>Rakuten Group masing-masing turun 3,76 persen dan 3,62 persen.</p>\n<p>Nilai tukar dolar Amerika Serikat menguat 0,48 persen terhadap yen menjadi 128,845 yen per dolar AS.</p>",
            "date": "2022-05-19T06:23:55.000Z",
            "tag": "saham,nikkei,bursa efek tokyo",
            "image": "https://pasardana.id/media/45884/the_tokyo_stock_exchange_-_main_r2e16d0bafill-1200x630.jpg?anchor=center&mode=crop&width=175&height=125&rnd=132974402360000000",
            "link": "https://pasardana.id/news/2022/5/19/indeks-nikkei-merosot-1-89-persen/",
            "createdAt": "2022-05-19T07:02:24.000Z",
            "updatedAt": "2022-05-19T07:02:24.000Z"
            },
            ...
        ],
        "totalPages": 2,
        "currentPage": 0
    }

## Get News Data

### Request

`GET /api/news/`

    curl -i -H 'Accept: application/json' http://localhost:8000/api/news/

### Response

    {
        "totalItems": 31,
        "news" : [
            {
            "id": 136,
            "idnews": 47581,
            "title": "Indeks Nikkei Merosot 1,89 Persen",
            "news": "<p><strong>Pasardana.id</strong> - Indeks Nikkei 225 di Bursa Efek Tokyo, Jepang, merosot 508,36 poin, atau sekitar 1,89 persen, pada Kamis (19/5/2022), menjadi 26.402,84. Indeks Topix merosot 1,30 persen menjadi 1.860,28.</p>\n<p>Seperti diwartakan <em>Reuters, </em>indeks Nikkei merosot mengikuti pergerakan saham di Wall Street yang dipicu tergelincirnya saham perusahaan ritel Target.</p>\n<p>Saham perusahaan pengiriman barang Yamato Holdings memimpin pelemahan hari ini dengan terjun 4,87 persen. Saham perusahaan pengapalan Nippon Yusen KK dan Kawasaki Kisen Kaisha masing-masing anjlok 4,84 persen dan 4,56 persen.</p>\n<p>Saham perusahaan ritel Seven &amp;amp; I Holdings merosot 3,95 persen. Saham perusahaan otomotif Nissan Motor dan perusahaan <em>e-commerce </em>Rakuten Group masing-masing turun 3,76 persen dan 3,62 persen.</p>\n<p>Nilai tukar dolar Amerika Serikat menguat 0,48 persen terhadap yen menjadi 128,845 yen per dolar AS.</p>",
            "date": "2022-05-19T06:23:55.000Z",
            "tag": "saham,nikkei,bursa efek tokyo",
            "image": "https://pasardana.id/media/45884/the_tokyo_stock_exchange_-_main_r2e16d0bafill-1200x630.jpg?anchor=center&mode=crop&width=175&height=125&rnd=132974402360000000",
            "link": "https://pasardana.id/news/2022/5/19/indeks-nikkei-merosot-1-89-persen/",
            "createdAt": "2022-05-19T07:02:24.000Z",
            "updatedAt": "2022-05-19T07:02:24.000Z"
            },
            ...
        ],
        "totalPages": 2,
        "currentPage": 0
    }

## Get Research Data

### Request

`GET /api/Research/`

    curl -i -H 'Accept: application/json' http://localhost:8000/api/research/

### Response

    {
        "totalItems": 4,
        "news" : [
            {
            "id": 143,
            "idnews": 47574,
            "title": "ANALIS MARKET (19/5/2022) : IHSG Diproyeksi Bergerak Menguat dengan Kisaran 6.700 - 6.900",
            "news": "<p><strong>Pasardana.id</strong> – Riset harian NH Korindo Sekuritas menyebutkan, kinerja buruk dan tekanan margin sejumlah perusahaan ritel, menekan bursa saham Wall Street. Indeks Nasdaq dan S&amp;amp;P 500 turun tajam hingga -4,73% dan -4,04%. </p>\n<p>Selain kenaikan harga BBM yang mempengaruhi biaya pengiriman, perusahaan ritel dihadapkan pada inflasi tinggi yang melampaui upah, mengikis daya beli konsumen. </p>\n<p>Tekanan Wall Street diperparah dengan aksi jual <em>growth stock</em> berkapitalisasi besar yang sensitif terhadap kenaikan suku bunga, seiring pidato Powell Selasa lalu, berkomitmen mengatasi inflasi tinggi AS.</p>\n<p>Di sisi lain, surplus neraca dagang seiring pertumbuhan ekspor, dengan impor yang terjaga, menjadi katalis positif perdagangan kemarin.</p>\n<p>IHSG menguat lebih dari 2%, sempat menyentuh level psikologis 6.800, sebelum akhirnya ditutup di level 6.793.</p>\n<p>Sembilan dari sebelas sektor menguat, dipimpin oleh teknologi (+5,57%) dan basic material (+2,21%), membuat IHSG konsisten bergerak di jalur hijau sepanjang perdagangan. </p>\n<p>Pergerakan IHSG ini, ditengah depresiasi rupiah yang mendekati level psikologis IDR 14.700.</p>\n<p>“IHSG diproyeksi bergerak <em>upward </em>dengan kisaran 6.700 - 6.900,” sebut analis NHKSI Research dalam riset yang dirilis Kamis (19/5/2022).</p>",
            "date": "2022-05-19T02:59:12.000Z",
            "tag": "IHSG,analisa market,NH Korindo sekuritas",
            "image": "https://pasardana.id/media/45877/bursa-x.jpg?crop=0.10128541810642708,0.0000000000000001136868377216,0.012467173462336025,0&cropmode=percentage&width=175&height=125&rnd=132974279530000000",
            "link": "https://pasardana.id/news/2022/5/19/analis-market-1952022-ihsg-diproyeksi-bergerak-menguat-dengan-kisaran-6700-6900/",
            "createdAt": "2022-05-19T07:02:24.000Z",
            "updatedAt": "2022-05-19T07:02:24.000Z"
            },
            ...
        ],
        "totalPages": 1,
        "currentPage": 0
    }

## Get Data By NewsId

### Request

`GET /api/:id/`

    curl -i -H 'Accept: application/json' http://localhost:8000/api/47565/

### Response

    [
    {
        "id": 151,
        "idnews": 47565,
        "title": "ANALIS MARKET (19/5/2022) : IHSG Diperkirakan Bergerak Melemah",
        "news": "<p><strong>Pasardana.id</strong> – Riset harian Samuel Sekuritas menyebutkan, Bursa AS ditutup melemah pada Rabu (18/5); Nasdaq turun -4.7%, S&amp;amp;P 500 -4.0%, dan DJIA -3.6%. Investor melakukan aksi jual besar-besaran pasca rilis laporan keuangan dua peritel besar AS, Target dan Walmart, yang jauh lebih rendah dari estimasi akibat tingginya biaya bahan bakar dan tenaga kerja. Hal ini tampaknya memicu kekhawatiran investor AS terkait dampak tingginya inflasi pada prospek ekonomi AS kedepan. Dari data ekonomi, data initial jobless claim AS akan dirilis nanti malam. Yield UST10Y turun ke level 2.89%, sementara USD index naik ke level 103.9.</p>\n<p>Pasar komoditas terpantau bergerak <em>mixed</em>; batu bara naik +1.8% ke level USD 407/ton, emas +0.2% ke USD 1,816/ toz, CPO +0.4% ke level RM 6,136/ton. Sementara itu, nikel turun -1.0% ke USD 26,180/ton dan minyak WTI turun -3.6% ke level USD 110/bbl.</p>\n<p>Bursa Asia ditutup mixed pada Rabu (18/5): Hang Seng +0.2%, Kospi +0.2%, Nikkei +0.9%, sedangkan Shanghai -0.2%. EIDO ditutup turun -1.4% di level 23.3, sementara IHSG ditutup naik +2.2% ke level 6,793, dengan <em>net sell</em> asing di pasar reguler sebesar IDR 59.3 miliar dan di pasar negosiasi sebesar IDR 221.2 miliar. <em>Net buy</em> asing tertinggi di pasar reguler dicatatkan oleh BBNI (IDR 129.3 miliar), KLBF (IDR 113.4 miliar), dan BMRI (IDR 77.3 miliar). Sementara itu, <em>net sell</em> asing tertinggi di pasar reguler dicatatkan oleh MDKA (IDR 106.8 miliar), PTBA (IDR 104.8 miliar), dan BBHI (IDR 94.3 miliar). <em>Top leading movers</em> adalah GOTO, BBCA, TLKM dan <em>top lagging movers</em> adalah EMTK, ARTO, BBHI.</p>\n<p>Terjadi penambahan 327 kasus baru COVID-19 di Indonesia kemarin (18/5) dengan <em>positivity rate</em> sebesar 0.3% (<em>recovery rate</em>: 97.4%, kasus aktif: 3,844).</p>\n<p>Adapun diperdagangan Kamis (19/5) pagi ini, pasar regional dibuka <em>mixed</em>, Nikkei -2.5% dan Kospi -1.9%.</p>\n<p>“Kami memperkirakan IHSG akan melemah hari ini, sejalan dengan pergerakan bursa global dan regional,” sebut analis Samuel Sekuritas dalam riset yang dirilis Kamis (19/5/2022).</p>",
        "date": "2022-05-19T01:52:19.000Z",
        "tag": "IHSG,analisa market,Samuel Sekuritas",
        "image": "https://pasardana.id/media/45869/bursa-asia1.jpg?crop=0.066666666666666666,0,0,0&cropmode=percentage&width=175&height=125&rnd=132974239390000000",
        "link": "https://pasardana.id/news/2022/5/19/analis-market-1952022-ihsg-diperkirakan-bergerak-melemah/",
        "createdAt": "2022-05-19T07:02:24.000Z",
        "updatedAt": "2022-05-19T07:02:24.000Z"
    }
    ]
