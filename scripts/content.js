window.onload = function () {
  const css = '@media (min-width: 768px) { .board { width: 20% !important; } }';
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);

  const title = document.querySelector('.detail-page-description.milestone-detail h2.title');
  if (!title) {
    return
  }
  const milestone_title = String(title.innerHTML).trim();

  const a = document.createElement('a');
  a.className = 'btn btn-grouped btn-primary';
  a.innerHTML = 'Board';
  a.href = `/desenvolvimento/siga/boards?milestone_title=${milestone_title}`;

  const toolbar = document.querySelector('.milestone-buttons');
  if (toolbar) {
    toolbar.appendChild(a)
  }
};
