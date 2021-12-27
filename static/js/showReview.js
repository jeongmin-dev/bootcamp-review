$(function() {
    let w = $(window),
      footerHei = $('footer').outerHeight(),
      banner = $('#banner');
  
    w.on('scroll', function() {
  
      let sT = w.scrollTop();
      let val = $(document).height() - w.height() - footerHei;
  
      if (sT >= val) {
          banner.addClass('on')
      }else{
          banner.removeClass('on')
      }
    });
  });


let id = 'kim';
let id_review;
getData(id);


let state = {
  'querySet' : id_review,

  'page':1,
  'rows':2,
  'window':5
}

$(document).ready(function () {
  buildTable();
});

// db 값 불러와서 id_review 에 담기
function getData(getId) {
  $.ajax({
      type: 'POST',
      url: '/mypage/list',
      async: false,
      data: {id_give:getId},
      success: function (response) {
        id_review = response['target_id']
      }
  });
}

function pagination(querySet, page, rows){
  let trimStart = (page - 1) * rows
  let trimEnd = trimStart + rows
  let trimmedData = querySet.slice(trimStart, trimEnd)
  let pages = Math.ceil(querySet.length / rows)

  return{
    'querySet':trimmedData,
    'pages':pages
  }

}

function pageButtons(pages) {
  let wrapper = document.querySelector('#pagination-wrapper')

  wrapper.innerHTML = ``
  console.log('pages:',pages)

  let maxLeft = (state.page - Math.floor(state.window / 2))
  let maxRight = (state.page + Math.floor(state.window / 2))

  if (maxLeft < 1) {
    maxLeft = 1
    maxRight = state.window
  }

  if (maxRight > pages) {
    maxLeft = pages - (state.window - 1)
    if (maxLeft < 1) {
      maxLeft = 1
    }
    maxRight = pages
  }

  for (let page = 1; page <= pages; page++) {
    wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-outline-dark">${page}</button>`
  }
  if (state.page != 1) {
    wrapper.innerHTML = `<button value=${1} class="page btn btn-sm btn-outline-dark">&#171; First</button>` + wrapper.innerHTML
  }

  if (state.page != pages) {
    wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-outline-dark">Last &#187;</button>`
  }

  $('.page').on('click', function(){
    $('#mypage_review_box').empty()

    state.page = $(this).val()
    
    buildTable()
  })
}



function buildTable() {
  let data = pagination(state.querySet, state.page, state.rows)
  console.log('data :',data)

  mylist = data.querySet

  if(id_review === 0 ) {
    $('#no_review_hidden').show()
  }else {
    $('#no_review_hidden').hide()
      for (let i = 0; i < mylist.length;i++){
          let title = mylist[i]['title']
          let img_url = mylist[i]['img_url']
          let contents = mylist[i]['contents']

          let temp_html =`<li class="mypage_review" id="test">
                                <div class="mypage_review_img">
                                    <img src="${img_url}" alt="">
                                </div>
                                <div class="mypage_review_text">
                                    <p class="title">${title}</p>
                                    <p class="summary">${contents}</p>
                                </div>
                            </li>`
          $('#mypage_review_box').append(temp_html)
    }
    pageButtons(data.pages);
  }
}


$('.mypage_review').on('click', function() {

  console.log('$(img_url)')

});


// $(document).on('click', '.mypage_review', function() {
	
//     console.log($(this).find("p.title").text());

// });