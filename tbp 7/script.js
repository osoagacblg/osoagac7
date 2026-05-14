const agaclar = [
    {
        ad: "Mavi Ladin (Picea Pungens)",
        bilgi: "7-10 yaş aralığındadır.En dikkat çekici özelliği, yapraklarının üzerindeki mumsu tabaka sayesinde oluşan gümüşi-mavi veya turkuaz rengidir. İğne yaprakları dört köşeli, oldukça sert ve uçları batıcı bir yapıdadır.Soğuk iklimlere, rüzgara ve şehir havasındaki kirliliğe karşı oldukça dirençlidir.",
        resim: "images/agac7.jpg"
    },
];

function getId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id")) || 1;
}

function agaciGoster(id) {
    const agac = agaclar[id - 1];
    document.getElementById("agacAdi").innerText = agac.ad;
    document.getElementById("agacBilgi").innerText = agac.bilgi;
    document.getElementById("agacResim").src = agac.resim;
}

function sonrakiAgac() {
    let id = getId();
    id++;
    if (id > agaclar.length) id = 1;
    window.location.search = "?id=" + id;
}

agaciGoster(getId());