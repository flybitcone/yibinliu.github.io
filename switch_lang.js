const toggle = document.getElementById('toggleLang');
const downloadBtn = document.getElementById('downloadBtn');
let isEN = false;

function renderContent(langData){
  for(const id in langData){
    document.getElementById(id).innerHTML = langData[id];
  }
}

renderContent(cv_cn);

toggle.onclick = () => {
  // 暂时禁用英文切换功能
  alert("English version will be available soon.");

//   isEN = !isEN;
//   renderContent(isEN ? cv_en : cv_cn);
//   document.getElementById('name').textContent = isEN ? 'Yibin Liu' : '刘怡斌';
//   document.getElementById('subtitle').textContent = isEN ? 'PhD Candidate in Nuclear Medicine and AI Dosimetry' : '核医学与人工智能剂量学博士研究生';
//   downloadBtn.textContent = isEN ? '📄 Download CV' : '📄 下载简历';
//   downloadBtn.href = isEN ? 'cv_en.pdf' : 'cv_cn.pdf';
//   toggle.textContent = isEN ? '中文' : 'EN';
};

document.getElementById('year').textContent = new Date().getFullYear();
