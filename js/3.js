let content = [
    {
        "id": "203",
        "title": "Жаклин ЗМ",
        "type": "mixed",
        "description": "Новая коллекция Жаклин, октябрь 2020г.",
        "order": 2,
        "active": true,
        "course_id": "15",
        "html_content": "<p style=\"text-align:center;\"><span style=\"font-size:21px;color:hsl(0,75%,60%);\"><strong>ЖАКЛИН</strong></span></p><figure class=\"image\"><img src=\"https://edu.zzgold.by/dls_uploads/users/516/original-1605173391223.png\"></figure><p>&nbsp;</p><p><span style=\"font-size:17px;color:hsl(0,0%,0%);font-family:'Lucida Sans Unicode', 'Lucida Grande', sans-serif;\">Жаклин — французское женское имя, которое переводится как «та, которая обгонит».</span></p><p><span style=\"font-size:17px;color:hsl(0,0%,0%);font-family:'Lucida Sans Unicode', 'Lucida Grande', sans-serif;\">Ювелирная коллекция «Жаклин» — для амбициозных, смелых и во многом дерзких женщин, которые привыкли не волноваться, а волновать.</span></p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"font-size:17px;color:hsl(0,0%,0%);font-family:'Lucida Sans Unicode', 'Lucida Grande', sans-serif;\"><strong>Технические характеристики:</strong></span></p><p style=\"text-align:justify;\"><span style=\"font-size:17px;color:hsl(240,75%,60%);background-color:hsl(0,0%,100%);font-family:'Lucida Sans Unicode', 'Lucida Grande', sans-serif;\"><strong>Изделия:&nbsp;</strong></span><span style=\"font-size:17px;color:hsl(0,0%,0%);font-family:'Lucida Sans Unicode', 'Lucida Grande', sans-serif;\"><strong>серьги, кольца, подвески, браслет</strong></span></p><p style=\"text-align:justify;\"><span style=\"font-size:17px;color:hsl(240,75%,60%);font-family:'Lucida Sans Unicode', 'Lucida Grande', sans-serif;\"><strong>Материал:</strong></span><span style=\"font-size:17px;color:hsl(0,0%,0%);font-family:'Lucida Sans Unicode', 'Lucida Grande', sans-serif;\"><strong>&nbsp;Золото 585 (14К), красное</strong></span></p><p style=\"text-align:justify;\"><span style=\"font-size:17px;color:hsl(240,75%,60%);font-family:'Lucida Sans Unicode', 'Lucida Grande', sans-serif;\"><strong>Вставки:</strong></span><span style=\"font-size:17px;color:hsl(0,0%,0%);font-family:'Lucida Sans Unicode', 'Lucida Grande', sans-serif;\"><strong>&nbsp;Кубический цирконий</strong></span></p><p style=\"text-align:justify;\">&nbsp;</p><p style=\"text-align:justify;\"><span style=\"font-size:17px;color:hsl(0,0%,0%);font-family:'Lucida Sans Unicode', 'Lucida Grande', sans-serif;\"><strong>Презентации&nbsp;#Коллекция Жаклин</strong></span></p><p style=\"text-align:justify;\">&nbsp;</p><section class=\"simple-box\"><div class=\"simple-box-title\">&nbsp;</div><div class=\"simple-box-description\"><figure class=\"image\"><img src=\"https://edu.zzgold.by/dls_uploads/users/516/original-1605173577984.png\"></figure></div><div class=\"simple-box-description\"><figure class=\"image\"><img src=\"https://edu.zzgold.by/dls_uploads/users/516/original-1605173586569.png\"></figure></div><div class=\"simple-box-description\"><figure class=\"image\"><img src=\"https://edu.zzgold.by/dls_uploads/users/516/original-1605173591648.png\"></figure></div></section><p style=\"text-align:center;\">&nbsp;</p>",
        "video_url": null,
        "images": {
            "normal": "https://edu.zzgold.by/dls_uploads/users/516/normal-1605177193354.png",
            "original": "https://edu.zzgold.by/dls_uploads/users/516/original-1605177193354.png",
            "preview": "https://edu.zzgold.by/dls_uploads/users/516/preview-1605177193354.png"
        },
        "audio_url": null,
        "cost": null,
        "estimation": 1200,
        "after_test_id": null,
        "read": true,
        "author": {
            "id": "516",
            "name": "Виктория",
            "surname": "Гацман"
        },
        "test": {
            "id": "237",
            "after_test_id": null,
            "title": "Жаклин",
            "published": true,
            "type": "course_intermediate",
            "max_attempts": 100,
            "time_to_pass": 420,
            "active": true,
            "questions_amount": 5,
            "assessment_type": "correct_answers",
            "min_answers": 4,
            "min_score_points": 4,
            "max_score_points": null,
            "award_condition_point": null,
            "next_attempt_time": 60,
            "after_test": true
        },
        "additional_materials": [
            {
                "id": "159",
                "title": "Коллекция Жаклин",
                "url": "https://edu.zzgold.by/dls_uploads/users/516/zalant_zaklin.pdf",
                "description": null,
                "order": null,
                "type": "pdf"
            }
        ],
        "after_test": true,
        "after_test_title": null
    }
]


const main = document.querySelector('main')

for (let i = 0; i < content.length; i++) {
  let hDiv = document.createElement('div');
  hDiv.innerText = content[i].title;
  hDiv.classList.add('.header')
  main.appendChild(hDiv)
  const div = document.createElement('div')
  div.classList.add('.display')
  hDiv.appendChild(div)
  hDiv.addEventListener('click', (e) => {
  div.innerHTML = content[i].html_content
  div.classList.toggle(".display")
  })}
