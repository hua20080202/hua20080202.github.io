function openModal(type) {
  const text = {
  大麥: `
    <h2>大麥</h2>
    <p><strong>性味：</strong>甘、鹹、涼</p>
    <p><strong>功效：</strong>健脾養胃、利尿</p>
    <p><strong>適合族群：</strong>脾胃虛弱、小便不順者</p> 
    <p>圖片來源： 
      <a href="https://christianweekly.net/2021/ta2040774.html" target="_blank">
      https://christianweekly.net/2021/ta2040774.html
      </a>
    </p> 
  `,
  糯米: `
    <h2>糯米</h2>
    <p><strong>性味：</strong>甘、溫</p>
    <p><strong>功效：</strong>補中益氣、止瀉</p>
    <p><strong>適合族群：</strong>肺脾氣虛、易感冒者</p>
    <p><strong>注意事項：</strong>用量不宜過大</p>  
  `,
  米: `
    <h2>米</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>補中益氣、健脾養胃、止渴、緩解煩燥</p>
    <p><strong>適合族群：</strong>脾胃虛弱、夏天致乏力 食慾不佳 口渴心煩、病後體虛者、嬰兒</p>
    <p><strong>注意事項：</strong>不宜食用過細的米</p>  
  `,
  小麥: `
    <h2>小麥</h2>
    <p><strong>性味：</strong>甘、涼</p>
    <p><strong>功效：</strong>養心、益腎、除熱止渴、止瀉</p>
    <p><strong>適合族群：</strong>更年期症狀者→加入南棗、龍眼煮粥</p>
    <p>口渴心煩者→水煎取汁</p>
    <p>慢性腹瀉者→炒黃研細末(黃連、雄黃)溫開水引用</p>
    <p><strong>注意事項：</strong>不宜食用過細小麥</p>  
    <p>圖片來源： 
      <a href="https://www.euatc.com.tw/product/detail88" target="_blank">
      https://www.euatc.com.tw/product/detail88
      </a>
    </p>
  `,
  小米: `
    <h2>小米</h2>
    <p><strong>性味：</strong>甘、涼</p>
    <p><strong>功效：</strong>健脾養胃</p>
    <p><strong>適合族群：</strong>消化不良者→加入米飯煮粥</p>
    <p>口渴咽躁者→水煎取汁</p>
    <p><strong>注意事項：</strong>不宜與杏仁一起服用</p>  
    <p>圖片來源： 
      <a href="https://www.commonhealth.com.tw/blog/2399" target="_blank">
      https://www.commonhealth.com.tw/blog/2399
      </a>
    </p>
  `,
  玉米: `
    <h2>玉米</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>養胃、利尿、降血脂、降血壓</p>
    <p><strong>適合族群：</strong>食慾不佳者→磨碎煮粥</p>
    <p>排尿不順、高血壓、高血脂者→水煎取汁</p>
    <p><strong>注意事項：</strong>脾胃虛者量不宜多</p>  
    <p>圖片來源： 
      <a href="https://reurl.cc/V2L85N" target="_blank">
      https://reurl.cc/V2L85N
      </a>
    </p>
  `,
  紅豆: `
    <h2>紅豆</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>利水除濕、消腫解毒</p>
    <p><strong>適合族群：</strong>水腫者→與鯉魚燉湯</p> 
    <p>圖片來源： 
      <a href="https://zh.wikipedia.org/zh-tw/%E7%B4%85%E8%B1%86" target="_blank">
      https://zh.wikipedia.org/zh-tw/%E7%B4%85%E8%B1%86
      </a>
    </p>
  `,
  豌豆: `
    <h2>豌豆</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>補中益氣、利尿、生津</p>
    <p><strong>適合族群：</strong>中氣不足者→與豬排骨燉湯</p>
    <p>糖尿病口渴多飲者→水煎取汁</p>
    <p>尿少者→豌豆苗燉湯</p>  
    <p>圖片來源： 
      <a href="https://shun-gate.com/zh/power/power_79/" target="_blank">
      https://shun-gate.com/zh/power/power_79/
      </a>
    </p>
  `,
  扁豆: `
    <h2>扁豆</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>健脾、化濕、消暑</p>
    <p><strong>適合族群：</strong>脾胃虛、嘔吐腹瀉者→與米飯煮粥</p>
    <p>白帶量多婦女→與山藥、薏仁煮粥</p>
    <p>夏天濕氣過重者→與荷葉水煎取汁</p>
    <p><strong>注意事項：</strong>加熱前有毒，需高溫煮透</p>  
    <p>圖片來源： 
      <a href="https://reurl.cc/3kxO5L" target="_blank">
      https://reurl.cc/3kxO5L
      </a>
    </p>
  `,
  黑豆: `
    <h2>黑豆</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>健脾益腎、活血利水、解毒</p>
    <p><strong>適合族群：</strong>腎虛腰痛、妊娠腰痛者→與豬尾骨燉湯</p>
    <p>水腫者→與鯽魚燉湯</p>
    <p>小兒胎熱→與燈心草、淡竹葉、甘草水間取汁</p>
    <p><strong>注意事項：</strong>不易消化，需煮爛，不宜過量</p>  
    <p>圖片來源： 
      <a href="https://reurl.cc/Emookk" target="_blank">
      https://reurl.cc/Emookk
      </a>
    </p>
  `,
  黃豆: `
    <h2>黃豆</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>健脾寬中(消化系統)、益氣</p>
    <p><strong>適合族群：</strong>脾虛體弱者→與米飯煮粥</p>
    <p>貧血者→與豬肝一同煮食</p>
    <p>婦人哺乳期調養、骨折、骨質疏鬆者→與豬排骨燉湯</p>
    <p><strong>注意事項：</strong>烹調時加入少量醋，避免維生素被破壞</p>  
    <p>圖片來源： 
      <a href="https://reurl.cc/6G5Na6" target="_blank">
      https://reurl.cc/6G5Na6
      </a>
    </p>
  `,
  黃豆芽: `
    <h2>黃豆芽</h2>
    <p><strong>性味：</strong>甘、寒</p>
    <p><strong>功效：</strong>清熱、利濕</p>
    <p><strong>適合族群：</strong>夏天暑濕盛時→滾湯或清炒</p>
    <p>胃有積熱者→與豬血滾湯</p>
    <p><strong>注意事項：</strong>烹調時加入少量醋，避免維生素被破壞</p>  
    <p>圖片來源： 
      <a href="https://helloyishi.com.tw/healthy-eating/nutrition/bean-sprout/" target="_blank">
      https://helloyishi.com.tw/healthy-eating/nutrition/bean-sprout/
      </a>
    </p>
  `,
  綠豆: `
    <h2>綠豆</h2>
    <p><strong>性味：</strong>甘、寒</p>
    <p><strong>功效：</strong>清熱解毒、消暑利水</p>
    <p><strong>適合族群：</strong>夏天暑熱煩渴者→加水大火滾，待冷代茶飲</p>
    <p>口舌破皮、小便不順者→與鮮白茅根水煎取汁</p>
    <p>野生香菇、蘑菇中毒者→生綠豆與水研濃汁飲</p>
    <p><strong>注意事項：</strong>脾胃虛、腹瀉(稀便)者不宜食用</p>  
    <p>圖片來源： 
      <a href="https://www.hucc-coop.tw/product/content/17040110022" target="_blank">
      https://www.hucc-coop.tw/product/content/17040110022
      </a>
    </p>
  `,
  綠豆芽: `
    <h2>綠豆芽</h2>
    <p><strong>性味：</strong>甘、寒</p>
    <p><strong>功效：</strong>清熱消暑、解毒利水</p>
    <p><strong>適合族群：</strong>夏天暑濕者→滾湯/清炒</p>
    <p><strong>注意事項：</strong>脾胃虛者不宜食用</p>  
    <p>圖片來源： 
      <a href="https://www.businessweekly.com.tw/style/blog/10117" target="_blank">
      https://www.businessweekly.com.tw/style/blog/10117
      </a>
    </p>
  `,
  豆腐: `
    <h2>豆腐</h2>
    <p><strong>性味：</strong>甘、涼</p>
    <p><strong>功效：</strong>生津潤燥、清熱解毒、催乳</p>
    <p><strong>適合族群：</strong>小兒夏季發燒不退→與黃瓜水煎取汁</p>
    <p>肺熱咳嗽、咽痛痰黃者→與絲瓜滾湯</p>
    <p>產後少乳者→與「王不留行」煮湯</p>
    <p><strong>注意事項：</strong>痛風患者慎食</p>  
    <p>圖片來源： 
      <a href="https://japan-food.jetro.go.jp/tw/feature/detail/748.html" target="_blank">
      https://japan-food.jetro.go.jp/tw/feature/detail/748.html
      </a>
    </p>
  `,
  白菜: `
    <h2>白菜</h2>
    <p><strong>性味：</strong>甘、涼</p>
    <p><strong>功效：</strong>清熱除煩、生津止渴、通腸胃、利尿</p>
    <p><strong>適合族群：</strong>發熱口渴、尿少、便祕者→煮湯</p>
    <p>肺熱咳嗽、高血壓、高血脂者→水煎取汁</p>
    <p><strong>注意事項：</strong>脾胃虛者量不宜多</p>  
    <p>圖片來源： 
      <a href="https://shop.santacruz.com.tw/products/90871?srsltid=AfmBOoq8441b-SC8ykCn26vwiQi6ymE1OQI9awuIBIRt_2hr4v3nkAcM" target="_blank">
      https://shop.santacruz.com.tw/products/90871?srsltid=AfmBOoq8441b-SC8ykCn26vwiQi6ymE1OQI9awuIBIRt_2hr4v3nkAcM
      </a>
    </p>
  `,
  玉米: `
    <h2>玉米</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>養胃、利尿、降血脂、降血壓</p>
    <p><strong>適合族群：</strong>食慾不佳者→磨碎煮粥</p>
    <p>排尿不順、高血壓、高血脂者→水煎取汁</p>
    <p><strong>注意事項：</strong>脾胃虛者量不宜多</p>  
    <p>圖片來源： 
      <a href="https://shop.santacruz.com.tw/products/90871?srsltid=AfmBOoq8441b-SC8ykCn26vwiQi6ymE1OQI9awuIBIRt_2hr4v3nkAcM" target="_blank">
      https://shop.santacruz.com.tw/products/90871?srsltid=AfmBOoq8441b-SC8ykCn26vwiQi6ymE1OQI9awuIBIRt_2hr4v3nkAcM
      </a>
    </p>
  `,
  玉米: `
    <h2>玉米</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>養胃、利尿、降血脂、降血壓</p>
    <p><strong>適合族群：</strong>食慾不佳者→磨碎煮粥</p>
    <p>排尿不順、高血壓、高血脂者→水煎取汁</p>
    <p><strong>注意事項：</strong>脾胃虛者量不宜多</p>  
    <p>圖片來源： 
      <a href="https://shop.santacruz.com.tw/products/90871?srsltid=AfmBOoq8441b-SC8ykCn26vwiQi6ymE1OQI9awuIBIRt_2hr4v3nkAcM" target="_blank">
      https://shop.santacruz.com.tw/products/90871?srsltid=AfmBOoq8441b-SC8ykCn26vwiQi6ymE1OQI9awuIBIRt_2hr4v3nkAcM
      </a>
    </p>
  `,
  玉米: `
    <h2>玉米</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>養胃、利尿、降血脂、降血壓</p>
    <p><strong>適合族群：</strong>食慾不佳者→磨碎煮粥</p>
    <p>排尿不順、高血壓、高血脂者→水煎取汁</p>
    <p><strong>注意事項：</strong>脾胃虛者量不宜多</p>  
    <p>圖片來源： 
      <a href="https://shop.santacruz.com.tw/products/90871?srsltid=AfmBOoq8441b-SC8ykCn26vwiQi6ymE1OQI9awuIBIRt_2hr4v3nkAcM" target="_blank">
      https://shop.santacruz.com.tw/products/90871?srsltid=AfmBOoq8441b-SC8ykCn26vwiQi6ymE1OQI9awuIBIRt_2hr4v3nkAcM
      </a>
    </p>
  `,
  玉米: `
    <h2>玉米</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>養胃、利尿、降血脂、降血壓</p>
    <p><strong>適合族群：</strong>食慾不佳者→磨碎煮粥</p>
    <p>排尿不順、高血壓、高血脂者→水煎取汁</p>
    <p><strong>注意事項：</strong>脾胃虛者量不宜多</p>  
    <p>圖片來源： 
      <a href="https://shop.santacruz.com.tw/products/90871?srsltid=AfmBOoq8441b-SC8ykCn26vwiQi6ymE1OQI9awuIBIRt_2hr4v3nkAcM" target="_blank">
      https://shop.santacruz.com.tw/products/90871?srsltid=AfmBOoq8441b-SC8ykCn26vwiQi6ymE1OQI9awuIBIRt_2hr4v3nkAcM
      </a>
    </p>
  `,
  玉米: `
    <h2>玉米</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>養胃、利尿、降血脂、降血壓</p>
    <p><strong>適合族群：</strong>食慾不佳者→磨碎煮粥</p>
    <p>排尿不順、高血壓、高血脂者→水煎取汁</p>
    <p><strong>注意事項：</strong>脾胃虛者量不宜多</p>  
    <p>圖片來源： 
      <a href="https://shop.santacruz.com.tw/products/90871?srsltid=AfmBOoq8441b-SC8ykCn26vwiQi6ymE1OQI9awuIBIRt_2hr4v3nkAcM" target="_blank">
      https://shop.santacruz.com.tw/products/90871?srsltid=AfmBOoq8441b-SC8ykCn26vwiQi6ymE1OQI9awuIBIRt_2hr4v3nkAcM
      </a>
    </p>
  `,
  玉米: `
    <h2>玉米</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>養胃、利尿、降血脂、降血壓</p>
    <p><strong>適合族群：</strong>食慾不佳者→磨碎煮粥</p>
    <p>排尿不順、高血壓、高血脂者→水煎取汁</p>
    <p><strong>注意事項：</strong>脾胃虛者量不宜多</p>  
    <p>圖片來源： 
      <a href="" target="_blank">
      
      </a>
    </p>
  `,
  辣椒: `
    <h2>辣椒</h2>
    <p><strong>性味：</strong>辛、熱</p>
    <p><strong>功效：</strong>溫中散寒、開胃、除濕</p>
    <p><strong>適合族群：</strong>手腳冰冷、感冒初期、腸胃偏寒者</p>
    <p><strong>注意事項：</strong>燥熱體質、喉嚨痛明顯者不宜多食</p>  
  `,
  生薑: `
    <h2>生薑</h2>
    <p><strong>性味：</strong>辛、溫</p>
    <p><strong>功效：</strong>溫中散寒、促進血液循環、止嘔</p>
    <p><strong>適合族群：</strong>手腳冰冷、感冒初期、腸胃偏寒者</p>
    <p><strong>注意事項：</strong>燥熱體質、喉嚨痛明顯者不宜多食</p>
  `,
  紅棗: `
    <h2>紅棗</h2>
    <p><strong>性味：</strong>甘、溫</p>
    <p><strong>功效：</strong>補氣養血、安神</p>
    <p><strong>適合族群：</strong>容易疲勞、氣血不足者</p>
    <p><strong>注意事項：</strong>糖分較高，糖尿病患者需注意</p>
  `,
  桂圓: `
    <h2>桂圓</h2>
    <p><strong>性味：</strong>甘、溫</p>
    <p><strong>功效：</strong>補血安神、改善疲勞</p>
    <p><strong>適合族群：</strong>氣血不足、睡眠品質差者</p>
    <p><strong>注意事項：</strong>體質燥熱者不宜多食</p>
  `,
  
  redbean: `
    <h2>紅豆</h2>
    <p><strong>性味：</strong>甘、酸、平</p>
    <p><strong>功效：</strong>利水消腫、健脾除濕</p>
    <p><strong>適合族群：</strong>水腫、久坐族群</p>
    <p><strong>注意事項：</strong>腸胃虛弱者避免空腹食用</p>
  `,
  lotus_seed: `
    <h2>蓮子</h2>
    <p><strong>性味：</strong>甘、澀、平</p>
    <p><strong>功效：</strong>健脾止瀉、養心安神</p>
    <p><strong>適合族群：</strong>睡眠不佳、腸胃虛弱者</p>
    <p><strong>注意事項：</strong>便秘者不宜多食</p>
  `,
  lotus_root: `
    <h2>蓮藕</h2>
    <p><strong>性味：</strong>甘、涼</p>
    <p><strong>功效：</strong>清熱生津、涼血</p>
    <p><strong>適合族群：</strong>口乾舌燥、容易上火者</p>
    <p><strong>注意事項：</strong>體質偏寒者不宜生食</p>
  `,
  mung_bean: `
    <h2>綠豆</h2>
    <p><strong>性味：</strong>甘、涼</p>
    <p><strong>功效：</strong>清熱解毒、消暑</p>
    <p><strong>適合族群：</strong>夏季燥熱、火氣大者</p>
    <p><strong>注意事項：</strong>脾胃虛寒者不宜多食</p>
  `,
  radish: `
    <h2>白蘿蔔</h2>
    <p><strong>性味：</strong>辛、甘、涼</p>
    <p><strong>功效：</strong>清熱化痰、促進消化</p>
    <p><strong>適合族群：</strong>消化不良、痰多者</p>
    <p><strong>注意事項：</strong>氣虛者不宜大量生食</p>
  `,  

  太子參: `
    <h2>太子參</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>養胃、利尿、降血脂、降血壓</p>
    <p><strong>適合族群：</strong>食慾不佳者→磨碎煮粥</p>
    <p>排尿不順、高血壓、高血脂者→水煎取汁</p>
    <p><strong>注意事項：</strong>脾胃虛者量不宜多</p>  
    <p>圖片來源： 
      <a href="" target="_blank">
      
      </a>
    </p>
  `,

  人參: `
    <h2>人參</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>養胃、利尿、降血脂、降血壓</p>
    <p><strong>適合族群：</strong>食慾不佳者→磨碎煮粥</p>
    <p>排尿不順、高血壓、高血脂者→水煎取汁</p>
    <p><strong>注意事項：</strong>脾胃虛者量不宜多</p>  
    <p>圖片來源： 
      <a href="" target="_blank">
      
      </a>
    </p>
  `,

  西洋參: `
    <h2>西洋參</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>養胃、利尿、降血脂、降血壓</p>
    <p><strong>適合族群：</strong>食慾不佳者→磨碎煮粥</p>
    <p>排尿不順、高血壓、高血脂者→水煎取汁</p>
    <p><strong>注意事項：</strong>脾胃虛者量不宜多</p>  
    <p>圖片來源： 
      <a href="" target="_blank">
      
      </a>
    </p>
  `,

  黨參: `
    <h2>黨參</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>補中益氣、健脾</p>
    <p><strong>常見搭配：</strong>黃耆、白朮</p>
    <p><strong>注意事項：</strong>實熱體質者不宜</p>
  `,

  黃耆: `
    <h2>黃耆</h2>
    <p><strong>性味：</strong>甘、溫</p>
    <p><strong>功效：</strong>補氣固表、提升免疫力</p>
    <p><strong>常見搭配：</strong>山藥、紅棗</p>
    <p><strong>注意事項：</strong>發炎、感冒發燒時不宜使用</p>
  `,
  
  山藥: `
    <h2>山藥</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>健脾養胃、補肺益腎</p>
    <p><strong>適合族群：</strong>腸胃虛弱、體力差者</p>
    <p><strong>注意事項：</strong>過敏體質者需煮熟食用</p>
  `,

  白术: `
    <h2>白朮</h2>
    <p><strong>性味：</strong>甘、苦、溫</p>
    <p><strong>功效：</strong>健脾益氣、燥濕</p>
    <p><strong>常見搭配：</strong>黨參、茯苓</p>
    <p><strong>注意事項：</strong>口渴便秘者慎用</p>
  `,

  茯苓: `
    <h2>茯苓</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>養胃、利尿、降血脂、降血壓</p>
    <p><strong>適合族群：</strong>食慾不佳者→磨碎煮粥</p>
    <p>排尿不順、高血壓、高血脂者→水煎取汁</p>
    <p><strong>注意事項：</strong>脾胃虛者量不宜多</p>  
    <p>圖片來源： 
      <a href="" target="_blank">
      
      </a>
    </p>
  `,

  紅棗: `
    <h2>紅棗</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>養胃、利尿、降血脂、降血壓</p>
    <p><strong>適合族群：</strong>食慾不佳者→磨碎煮粥</p>
    <p>排尿不順、高血壓、高血脂者→水煎取汁</p>
    <p><strong>注意事項：</strong>脾胃虛者量不宜多</p>  
    <p>圖片來源： 
      <a href="" target="_blank">
      
      </a>
    </p>
  `,

  熟地黃: `
    <h2>熟地黃</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>養胃、利尿、降血脂、降血壓</p>
    <p><strong>適合族群：</strong>食慾不佳者→磨碎煮粥</p>
    <p>排尿不順、高血壓、高血脂者→水煎取汁</p>
    <p><strong>注意事項：</strong>脾胃虛者量不宜多</p>  
    <p>圖片來源： 
      <a href="" target="_blank">
      
      </a>
    </p>
  `,

  當歸: `
    <h2>當歸</h2>
    <p><strong>性味：</strong>甘、辛、溫</p>
    <p><strong>功效：</strong>補血活血、調經止痛</p>
    <p><strong>常見搭配：</strong>紅棗、枸杞</p>
    <p><strong>注意事項：</strong>孕婦及經血量多者需諮詢醫師</p>
  `,

  生地黃: `
    <h2>生地黃</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>養胃、利尿、降血脂、降血壓</p>
    <p><strong>適合族群：</strong>食慾不佳者→磨碎煮粥</p>
    <p>排尿不順、高血壓、高血脂者→水煎取汁</p>
    <p><strong>注意事項：</strong>脾胃虛者量不宜多</p>  
    <p>圖片來源： 
      <a href="" target="_blank">
      
      </a>
    </p>
  `, 

  製何首烏: `
    <h2>製何首烏</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>養胃、利尿、降血脂、降血壓</p>
    <p><strong>適合族群：</strong>食慾不佳者→磨碎煮粥</p>
    <p>排尿不順、高血壓、高血脂者→水煎取汁</p>
    <p><strong>注意事項：</strong>脾胃虛者量不宜多</p>  
    <p>圖片來源： 
      <a href="" target="_blank">
      
      </a>
    </p>
  `,

  阿膠: `
    <h2>阿膠</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>養胃、利尿、降血脂、降血壓</p>
    <p><strong>適合族群：</strong>食慾不佳者→磨碎煮粥</p>
    <p>排尿不順、高血壓、高血脂者→水煎取汁</p>
    <p><strong>注意事項：</strong>脾胃虛者量不宜多</p>  
    <p>圖片來源： 
      <a href="" target="_blank">
      
      </a>
    </p>
  `,

  桂圓: `
    <h2>桂圓</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>養胃、利尿、降血脂、降血壓</p>
    <p><strong>適合族群：</strong>食慾不佳者→磨碎煮粥</p>
    <p>排尿不順、高血壓、高血脂者→水煎取汁</p>
    <p><strong>注意事項：</strong>脾胃虛者量不宜多</p>  
    <p>圖片來源： 
      <a href="" target="_blank">
      
      </a>
    </p>
  `,

  鹿茸: `
    <h2>鹿茸</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>養胃、利尿、降血脂、降血壓</p>
    <p><strong>適合族群：</strong>食慾不佳者→磨碎煮粥</p>
    <p>排尿不順、高血壓、高血脂者→水煎取汁</p>
    <p><strong>注意事項：</strong>脾胃虛者量不宜多</p>  
    <p>圖片來源： 
      <a href="" target="_blank">
      
      </a>
    </p>
  `,

  冬蟲夏草: `
    <h2>冬蟲夏草</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>養胃、利尿、降血脂、降血壓</p>
    <p><strong>適合族群：</strong>食慾不佳者→磨碎煮粥</p>
    <p>排尿不順、高血壓、高血脂者→水煎取汁</p>
    <p><strong>注意事項：</strong>脾胃虛者量不宜多</p>  
    <p>圖片來源： 
      <a href="" target="_blank">
      
      </a>
    </p>
  `,

  蛤蚧: `
    <h2>蛤蚧</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>養胃、利尿、降血脂、降血壓</p>
    <p><strong>適合族群：</strong>食慾不佳者→磨碎煮粥</p>
    <p>排尿不順、高血壓、高血脂者→水煎取汁</p>
    <p><strong>注意事項：</strong>脾胃虛者量不宜多</p>  
    <p>圖片來源： 
      <a href="" target="_blank">
      
      </a>
    </p>
  `,

 巴戟天: `
    <h2>巴戟天</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>養胃、利尿、降血脂、降血壓</p>
    <p><strong>適合族群：</strong>食慾不佳者→磨碎煮粥</p>
    <p>排尿不順、高血壓、高血脂者→水煎取汁</p>
    <p><strong>注意事項：</strong>脾胃虛者量不宜多</p>  
    <p>圖片來源： 
      <a href="" target="_blank">
      
      </a>
    </p>
  `,

  淫羊藿: `
    <h2>淫羊藿</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>養胃、利尿、降血脂、降血壓</p>
    <p><strong>適合族群：</strong>食慾不佳者→磨碎煮粥</p>
    <p>排尿不順、高血壓、高血脂者→水煎取汁</p>
    <p><strong>注意事項：</strong>脾胃虛者量不宜多</p>  
    <p>圖片來源： 
      <a href="" target="_blank">
      
      </a>
    </p>
  `,

  杜仲: `
    <h2>杜仲</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>養胃、利尿、降血脂、降血壓</p>
    <p><strong>適合族群：</strong>食慾不佳者→磨碎煮粥</p>
    <p>排尿不順、高血壓、高血脂者→水煎取汁</p>
    <p><strong>注意事項：</strong>脾胃虛者量不宜多</p>  
    <p>圖片來源： 
      <a href="" target="_blank">
      
      </a>
    </p>
  `,

  胡桃: `
    <h2>胡桃</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>養胃、利尿、降血脂、降血壓</p>
    <p><strong>適合族群：</strong>食慾不佳者→磨碎煮粥</p>
    <p>排尿不順、高血壓、高血脂者→水煎取汁</p>
    <p><strong>注意事項：</strong>脾胃虛者量不宜多</p>  
    <p>圖片來源： 
      <a href="" target="_blank">
      
      </a>
    </p>
  `,

  桂枝: `
    <h2>桂枝</h2>
    <p><strong>性味：</strong>辛、甘、溫</p>
    <p><strong>功效：</strong>溫經通脈、驅寒</p>
    <p><strong>常見搭配：</strong>生薑、紅棗</p>
    <p><strong>注意事項：</strong>陰虛火旺者不宜</p>
    <p>圖片來源： 
      <a href="" target="_blank">
      
      </a>
    </p>
  `,

  北沙參: `
    <h2>北沙參</h2>
    <p><strong>性味：</strong>辛、甘、溫</p>
    <p><strong>功效：</strong>溫經通脈、驅寒</p>
    <p><strong>常見搭配：</strong>生薑、紅棗</p>
    <p><strong>注意事項：</strong>陰虛火旺者不宜</p>
    <p>圖片來源： 
      <a href="" target="_blank">
      
      </a>
    </p>
  `,

  桂枝: `
    <h2>桂枝</h2>
    <p><strong>性味：</strong>辛、甘、溫</p>
    <p><strong>功效：</strong>溫經通脈、驅寒</p>
    <p><strong>常見搭配：</strong>生薑、紅棗</p>
    <p><strong>注意事項：</strong>陰虛火旺者不宜</p>
    <p>圖片來源： 
      <a href="" target="_blank">
      
      </a>
    </p>
  `,

  桂枝: `
    <h2>桂枝</h2>
    <p><strong>性味：</strong>辛、甘、溫</p>
    <p><strong>功效：</strong>溫經通脈、驅寒</p>
    <p><strong>常見搭配：</strong>生薑、紅棗</p>
    <p><strong>注意事項：</strong>陰虛火旺者不宜</p>
    <p>圖片來源： 
      <a href="" target="_blank">
      
      </a>
    </p>
  `,

  桂枝: `
    <h2>桂枝</h2>
    <p><strong>性味：</strong>辛、甘、溫</p>
    <p><strong>功效：</strong>溫經通脈、驅寒</p>
    <p><strong>常見搭配：</strong>生薑、紅棗</p>
    <p><strong>注意事項：</strong>陰虛火旺者不宜</p>
    <p>圖片來源： 
      <a href="" target="_blank">
      
      </a>
    </p>
  `,

  桂枝: `
    <h2>桂枝</h2>
    <p><strong>性味：</strong>辛、甘、溫</p>
    <p><strong>功效：</strong>溫經通脈、驅寒</p>
    <p><strong>常見搭配：</strong>生薑、紅棗</p>
    <p><strong>注意事項：</strong>陰虛火旺者不宜</p>
    <p>圖片來源： 
      <a href="" target="_blank">
      
      </a>
    </p>
  `,

  桂枝: `
    <h2>桂枝</h2>
    <p><strong>性味：</strong>辛、甘、溫</p>
    <p><strong>功效：</strong>溫經通脈、驅寒</p>
    <p><strong>常見搭配：</strong>生薑、紅棗</p>
    <p><strong>注意事項：</strong>陰虛火旺者不宜</p>
    <p>圖片來源： 
      <a href="" target="_blank">
      
      </a>
    </p>
  `,
  goji: `
    <h2>枸杞</h2>
    <p><strong>性味：</strong>甘、平</p>
    <p><strong>功效：</strong>補肝腎、明目</p>
    <p><strong>常見搭配：</strong>菊花、紅棗</p>
    <p><strong>注意事項：</strong>感冒或腹瀉時暫停食用</p>
  `,
  
  
  感冒初期: `
    <h2>感冒初期</h2>
    <p><strong>建議食材：</strong>生薑、紅棗</p>
    <p><strong>搭配藥材：</strong>桂枝、薄荷（少量）</p>
    <p><strong>食療建議：</strong>薑棗茶，溫熱飲用</p>
    <p><strong>注意事項：</strong>發燒或喉嚨劇痛者不適合</p>
    `,
  慢性胃炎: `
    <h2>慢性胃炎</h2>
    <p><strong>建議食材：</strong></p>
    <p><strong>搭配藥材：</strong></p>
    <p><strong>食療建議：</strong></p>
    <p><strong>注意事項：</strong></p>
    `,
  腸胃虛弱: `
    <h2>腸胃虛弱</h2>
    <p><strong>建議食材：</strong>山藥、蓮子</p>
    <p><strong>搭配藥材：</strong>黨參、白朮</p>
    <p><strong>食療建議：</strong>山藥蓮子粥</p>
    <p><strong>注意事項：</strong>避免生冷油膩食物</p>
    `,
  經期不適: `
    <h2>經期不適</h2>
    <p><strong>建議食材：</strong>紅豆、紅棗</p>
    <p><strong>搭配藥材：</strong>當歸、桂枝</p>
    <p><strong>食療建議：</strong>當歸燉雞湯</p>
    <p><strong>注意事項：</strong>經血量過多者需諮詢專業</p>
    `,
  慢性支氣管炎: `
    <h2>慢性支氣管炎</h2>
    <p><strong>建議食材：</strong>山藥、紅棗</p>
    <p><strong>搭配藥材：</strong>黃耆、枸杞</p>
    <p><strong>食療建議：</strong>黃耆枸杞雞湯</p>
    <p><strong>注意事項：</strong>感冒發炎期間暫停</p>
    `
  };
  document.getElementById("modal-text").innerHTML = text[type];
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}