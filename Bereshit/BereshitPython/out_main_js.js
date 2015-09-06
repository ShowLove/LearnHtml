//Change entire text to either Heb_&_Eng or Translit_&_Eng
function changeChapterLang(idElement){
  //switch between Heb and Eng or Transliteration and Eng

	//Change all text to Hebrew and English
  if( idElement == 1){
      document.getElementById('divNum_1_1_1_1L2').innerHTML ="in~SUMMIT";
      document.getElementById('divNum_3_1_1_1L1').innerHTML ="בְּרֵאשִׁית";
      document.getElementById('divNum_5_1_1_1L2').innerHTML ="he~did~FATTEN(V)";
      document.getElementById('divNum_7_1_1_1L1').innerHTML ="בָּרָּא";
      document.getElementById('divNum_9_1_1_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_11_1_1_1L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_13_1_1_1L2').innerHTML ="AT";
      document.getElementById('divNum_15_1_1_1L1').innerHTML ="אֵת";
      document.getElementById('divNum_17_1_1_1L2').innerHTML ="the~SKY";
      document.getElementById('divNum_19_1_1_1L1').innerHTML ="הַשָּמַיִׁם";
      document.getElementById('divNum_21_1_1_1L2').innerHTML ="and~AT";
      document.getElementById('divNum_23_1_1_1L1').innerHTML ="וְּאֵת";
      document.getElementById('divNum_25_1_1_1L2').innerHTML ="the~LAND";
      document.getElementById('divNum_27_1_1_1L1').innerHTML ="הָּאָרֶץ";
      document.getElementById('divNum_1_1_2_1L2').innerHTML ="and~the~LAND";
      document.getElementById('divNum_3_1_2_1L1').innerHTML ="וְּהָּאָרֶץ";
      document.getElementById('divNum_5_1_2_1L2').innerHTML ="she~did~EXIST(V)";
      document.getElementById('divNum_7_1_2_1L1').innerHTML ="הָּיְּתָּה";
      document.getElementById('divNum_9_1_2_1L2').innerHTML ="CONFUSION";
      document.getElementById('divNum_11_1_2_1L1').innerHTML ="תֹהוּ";
      document.getElementById('divNum_13_1_2_1L2').innerHTML ="and~UNFILLED";
      document.getElementById('divNum_15_1_2_1L1').innerHTML ="וָּבֹהוּ";
      document.getElementById('divNum_17_1_2_1L2').innerHTML ="and~DARKNESS";
      document.getElementById('divNum_19_1_2_1L1').innerHTML ="וְּחֹשֶךְ";
      document.getElementById('divNum_21_1_2_1L2').innerHTML ="UPON";
      document.getElementById('divNum_23_1_2_1L1').innerHTML ="עַל";
      document.getElementById('divNum_25_1_2_1L2').innerHTML ="FACE";
      document.getElementById('divNum_27_1_2_1L1').innerHTML ="פְּנֵי";
      document.getElementById('divNum_29_1_2_1L2').innerHTML ="DEEP.SEA";
      document.getElementById('divNum_31_1_2_1L1').innerHTML ="תְּהוֹם";
      document.getElementById('divNum_33_1_2_2L2').innerHTML ="and~WIND";
      document.getElementById('divNum_35_1_2_2L1').innerHTML ="וְּרוּחַַ";
      document.getElementById('divNum_37_1_2_2L2').innerHTML ="Elohiym";
      document.getElementById('divNum_39_1_2_2L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_41_1_2_2L2').innerHTML ="much~FLUTTER(V)";
      document.getElementById('divNum_43_1_2_2L1').innerHTML ="מְּרַחֶפֶת";
      document.getElementById('divNum_45_1_2_2L2').innerHTML ="UPON";
      document.getElementById('divNum_47_1_2_2L1').innerHTML ="עַל";
      document.getElementById('divNum_49_1_2_2L2').innerHTML ="FACE";
      document.getElementById('divNum_51_1_2_2L1').innerHTML ="פְּנֵי";
      document.getElementById('divNum_53_1_2_2L2').innerHTML ="the~WATER";
      document.getElementById('divNum_55_1_2_2L1').innerHTML ="הַמָּיִׁם";
      document.getElementById('divNum_1_1_3_1L2').innerHTML ="and~he~will~SAY(V)";
      document.getElementById('divNum_3_1_3_1L1').innerHTML ="וַיֹאמֶר";
      document.getElementById('divNum_5_1_3_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_7_1_3_1L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_9_1_3_1L2').innerHTML ="he~will~EXIST(V)";
      document.getElementById('divNum_11_1_3_1L1').innerHTML ="יְּהִׁי";
      document.getElementById('divNum_13_1_3_1L2').innerHTML ="LIGHT";
      document.getElementById('divNum_15_1_3_1L1').innerHTML ="אוֹר";
      document.getElementById('divNum_17_1_3_1L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_19_1_3_1L1').innerHTML ="וַיְּהִׁי";
      document.getElementById('divNum_21_1_3_1L2').innerHTML ="LIGHT";
      document.getElementById('divNum_23_1_3_1L1').innerHTML ="אוֹר";
      document.getElementById('divNum_1_1_4_1L2').innerHTML ="and~he~will~SEE(V)";
      document.getElementById('divNum_3_1_4_1L1').innerHTML ="וַיַרְּא";
      document.getElementById('divNum_5_1_4_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_7_1_4_1L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_9_1_4_1L2').innerHTML ="AT";
      document.getElementById('divNum_11_1_4_1L1').innerHTML ="אֶת";
      document.getElementById('divNum_13_1_4_1L2').innerHTML ="the~LIGHT";
      document.getElementById('divNum_15_1_4_1L1').innerHTML ="הָּאוֹר";
      document.getElementById('divNum_17_1_4_1L2').innerHTML ="GIVEN.THAT";
      document.getElementById('divNum_19_1_4_1L1').innerHTML ="כִׁי";
      document.getElementById('divNum_21_1_4_1L2').innerHTML ="FUNCTIONAL";
      document.getElementById('divNum_23_1_4_1L1').innerHTML ="טוֹב";
      document.getElementById('divNum_25_1_4_1L2').innerHTML ="and~he~will~make~SEPARATE(V)";
      document.getElementById('divNum_27_1_4_1L1').innerHTML ="וַיַבְּדֵל";
      document.getElementById('divNum_29_1_4_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_31_1_4_1L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_33_1_4_2L2').innerHTML ="BETWEEN";
      document.getElementById('divNum_35_1_4_2L1').innerHTML ="בֵין";
      document.getElementById('divNum_37_1_4_2L2').innerHTML ="the~LIGHT";
      document.getElementById('divNum_39_1_4_2L1').innerHTML ="הָּאוֹר";
      document.getElementById('divNum_41_1_4_2L2').innerHTML ="and~BETWEEN";
      document.getElementById('divNum_43_1_4_2L1').innerHTML ="וּבֵין";
      document.getElementById('divNum_45_1_4_2L2').innerHTML ="the~DARKNESS";
      document.getElementById('divNum_47_1_4_2L1').innerHTML ="הַחֹשֶךְ";
      document.getElementById('divNum_1_1_5_1L2').innerHTML ="and~he~will~CALL.OUT(V)";
      document.getElementById('divNum_3_1_5_1L1').innerHTML ="וַיִׁקְּרָּא";
      document.getElementById('divNum_5_1_5_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_7_1_5_1L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_9_1_5_1L2').innerHTML ="to~LIGHT";
      document.getElementById('divNum_11_1_5_1L1').innerHTML ="לָּאוֹר";
      document.getElementById('divNum_13_1_5_1L2').innerHTML ="DAY";
      document.getElementById('divNum_15_1_5_1L1').innerHTML ="יוֹם";
      document.getElementById('divNum_17_1_5_1L2').innerHTML ="and~to~DARKNESS";
      document.getElementById('divNum_19_1_5_1L1').innerHTML ="וְּלַחֹשֶךְ";
      document.getElementById('divNum_21_1_5_1L2').innerHTML ="he~did~CALL.OUT(V)";
      document.getElementById('divNum_23_1_5_1L1').innerHTML ="קָּרָּא";
      document.getElementById('divNum_25_1_5_1L2').innerHTML ="NIGHT";
      document.getElementById('divNum_27_1_5_1L1').innerHTML ="לָּיְּלָּה";
      document.getElementById('divNum_29_1_5_1L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_31_1_5_1L1').innerHTML ="וַיְּהִׁי";
      document.getElementById('divNum_33_1_5_2L2').innerHTML ="EVENING";
      document.getElementById('divNum_35_1_5_2L1').innerHTML ="עֶרֶב";
      document.getElementById('divNum_37_1_5_2L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_39_1_5_2L1').innerHTML ="וַיְּהִׁי";
      document.getElementById('divNum_41_1_5_2L2').innerHTML ="MORNING";
      document.getElementById('divNum_43_1_5_2L1').innerHTML ="בֹקֶר";
      document.getElementById('divNum_45_1_5_2L2').innerHTML ="DAY";
      document.getElementById('divNum_47_1_5_2L1').innerHTML ="יוֹם";
      document.getElementById('divNum_49_1_5_2L2').innerHTML ="UNIT";
      document.getElementById('divNum_51_1_5_2L1').innerHTML ="אֶחָּד";
      document.getElementById('divNum_1_1_6_1L2').innerHTML ="and~he~will~SAY(V)";
      document.getElementById('divNum_3_1_6_1L1').innerHTML ="וַיֹאמֶר";
      document.getElementById('divNum_5_1_6_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_7_1_6_1L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_9_1_6_1L2').innerHTML ="he~will~EXIST(V)";
      document.getElementById('divNum_11_1_6_1L1').innerHTML ="יְּהִׁי";
      document.getElementById('divNum_13_1_6_1L2').innerHTML ="SHEET";
      document.getElementById('divNum_15_1_6_1L1').innerHTML ="רָּקִׁיעַַ";
      document.getElementById('divNum_17_1_6_1L2').innerHTML ="in~MIDST";
      document.getElementById('divNum_19_1_6_1L1').innerHTML ="בְּתוֹךְ";
      document.getElementById('divNum_21_1_6_1L2').innerHTML ="the~WATER";
      document.getElementById('divNum_23_1_6_1L1').innerHTML ="הַמָּיִׁם";
      document.getElementById('divNum_25_1_6_1L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_27_1_6_1L1').innerHTML ="וִׁיהִׁי";
      document.getElementById('divNum_29_1_6_1L2').innerHTML ="make~SEPARATE(V)";
      document.getElementById('divNum_31_1_6_1L1').innerHTML ="מַבְּדִׁיל";
      document.getElementById('divNum_33_1_6_2L2').innerHTML ="BETWEEN";
      document.getElementById('divNum_35_1_6_2L1').innerHTML ="בֵין";
      document.getElementById('divNum_37_1_6_2L2').innerHTML ="WATER";
      document.getElementById('divNum_39_1_6_2L1').innerHTML ="מַיִׁם";
      document.getElementById('divNum_41_1_6_2L2').innerHTML ="to~WATER";
      document.getElementById('divNum_43_1_6_2L1').innerHTML ="לָּמָּיִׁם";
      document.getElementById('divNum_1_1_7_1L2').innerHTML ="and~he~will~DO(V)";
      document.getElementById('divNum_3_1_7_1L1').innerHTML ="וַיַעַשׂ";
      document.getElementById('divNum_5_1_7_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_7_1_7_1L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_9_1_7_1L2').innerHTML ="AT";
      document.getElementById('divNum_11_1_7_1L1').innerHTML ="אֶת";
      document.getElementById('divNum_13_1_7_1L2').innerHTML ="the~SHEET";
      document.getElementById('divNum_15_1_7_1L1').innerHTML ="הָּרָּקִׁיעַַ";
      document.getElementById('divNum_17_1_7_1L2').innerHTML ="and~he~will~make~SEPARATE(V)";
      document.getElementById('divNum_19_1_7_1L1').innerHTML ="וַיַבְּדֵל";
      document.getElementById('divNum_21_1_7_1L2').innerHTML ="BETWEEN";
      document.getElementById('divNum_23_1_7_1L1').innerHTML ="בֵין";
      document.getElementById('divNum_25_1_7_1L2').innerHTML ="the~WATER";
      document.getElementById('divNum_27_1_7_1L1').innerHTML ="הַמַיִׁם";
      document.getElementById('divNum_29_1_7_1L2').innerHTML ="WHICH";
      document.getElementById('divNum_31_1_7_1L1').innerHTML ="אֲשֶר";
      document.getElementById('divNum_33_1_7_2L2').innerHTML ="from~UNDER";
      document.getElementById('divNum_35_1_7_2L1').innerHTML ="מִׁתַחַת";
      document.getElementById('divNum_37_1_7_2L2').innerHTML ="to~SHEET";
      document.getElementById('divNum_39_1_7_2L1').innerHTML ="לָּרָּקִׁיעַַ";
      document.getElementById('divNum_41_1_7_2L2').innerHTML ="and~BETWEEN";
      document.getElementById('divNum_43_1_7_2L1').innerHTML ="וּבֵין";
      document.getElementById('divNum_45_1_7_2L2').innerHTML ="the~WATER";
      document.getElementById('divNum_47_1_7_2L1').innerHTML ="הַמַיִׁם";
      document.getElementById('divNum_49_1_7_2L2').innerHTML ="WHICH";
      document.getElementById('divNum_51_1_7_2L1').innerHTML ="אֲשֶר";
      document.getElementById('divNum_53_1_7_2L2').innerHTML ="from~UPON";
      document.getElementById('divNum_55_1_7_2L1').innerHTML ="מֵעַל";
      document.getElementById('divNum_57_1_7_2L2').innerHTML ="to~SHEET";
      document.getElementById('divNum_59_1_7_2L1').innerHTML ="לָּרָּקִׁיעַַ";
      document.getElementById('divNum_61_1_7_2L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_63_1_7_2L1').innerHTML ="וַיְּהִׁי";
      document.getElementById('divNum_65_1_7_3L2').innerHTML ="SO";
      document.getElementById('divNum_67_1_7_3L1').innerHTML ="כֵן";
      document.getElementById('divNum_1_1_8_1L2').innerHTML ="and~he~will~CALL.OUT(V)";
      document.getElementById('divNum_3_1_8_1L1').innerHTML ="וַיִׁקְּרָּא";
      document.getElementById('divNum_5_1_8_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_7_1_8_1L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_9_1_8_1L2').innerHTML ="to~SHEET";
      document.getElementById('divNum_11_1_8_1L1').innerHTML ="לָּרָּקִׁיעַַ";
      document.getElementById('divNum_13_1_8_1L2').innerHTML ="SKY";
      document.getElementById('divNum_15_1_8_1L1').innerHTML ="שָּמָּיִׁם";
      document.getElementById('divNum_17_1_8_1L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_19_1_8_1L1').innerHTML ="וַיְּהִׁי";
      document.getElementById('divNum_21_1_8_1L2').innerHTML ="EVENING";
      document.getElementById('divNum_23_1_8_1L1').innerHTML ="עֶרֶב";
      document.getElementById('divNum_25_1_8_1L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_27_1_8_1L1').innerHTML ="וַיְּהִׁי";
      document.getElementById('divNum_29_1_8_1L2').innerHTML ="MORNING";
      document.getElementById('divNum_31_1_8_1L1').innerHTML ="בֹקֶר";
      document.getElementById('divNum_33_1_8_2L2').innerHTML ="DAY";
      document.getElementById('divNum_35_1_8_2L1').innerHTML ="יוֹם";
      document.getElementById('divNum_37_1_8_2L2').innerHTML ="SECOND";
      document.getElementById('divNum_39_1_8_2L1').innerHTML ="שֵנִׁי";
      document.getElementById('divNum_1_1_9_1L2').innerHTML ="and~he~will~SAY(V)";
      document.getElementById('divNum_3_1_9_1L1').innerHTML ="וַיֹאמֶר";
      document.getElementById('divNum_5_1_9_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_7_1_9_1L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_9_1_9_1L2').innerHTML ="he~will~be~BOUND.UP(V)";
      document.getElementById('divNum_11_1_9_1L1').innerHTML ="יִׁקָּווּ";
      document.getElementById('divNum_13_1_9_1L2').innerHTML ="the~WATER";
      document.getElementById('divNum_15_1_9_1L1').innerHTML ="הַמַיִׁם";
      document.getElementById('divNum_17_1_9_1L2').innerHTML ="from~UNDER";
      document.getElementById('divNum_19_1_9_1L1').innerHTML ="מִׁתַחַת";
      document.getElementById('divNum_21_1_9_1L2').innerHTML ="the~SKY";
      document.getElementById('divNum_23_1_9_1L1').innerHTML ="הַשָּמַיִׁם";
      document.getElementById('divNum_25_1_9_1L2').innerHTML ="TO";
      document.getElementById('divNum_27_1_9_1L1').innerHTML ="אֶל";
      document.getElementById('divNum_29_1_9_1L2').innerHTML ="AREA";
      document.getElementById('divNum_31_1_9_1L1').innerHTML ="מָּקוֹם";
      document.getElementById('divNum_33_1_9_2L2').innerHTML ="UNIT";
      document.getElementById('divNum_35_1_9_2L1').innerHTML ="אֶחָּד";
      document.getElementById('divNum_37_1_9_2L2').innerHTML ="and~she~be~SEE(V)";
      document.getElementById('divNum_39_1_9_2L1').innerHTML ="וְּתֵרָּאֶה";
      document.getElementById('divNum_41_1_9_2L2').innerHTML ="the~DRY.GROUND";
      document.getElementById('divNum_43_1_9_2L1').innerHTML ="הַיַבָּשָּה";
      document.getElementById('divNum_45_1_9_2L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_47_1_9_2L1').innerHTML ="וַיְּהִׁי";
      document.getElementById('divNum_49_1_9_2L2').innerHTML ="SO";
      document.getElementById('divNum_51_1_9_2L1').innerHTML ="כֵן";
      document.getElementById('divNum_1_1_10_1L2').innerHTML ="and~he~will~CALL.OUT(V)";
      document.getElementById('divNum_3_1_10_1L1').innerHTML ="וַיִׁקְּרָּא";
      document.getElementById('divNum_5_1_10_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_7_1_10_1L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_9_1_10_1L2').innerHTML ="to~DRY.GROUND";
      document.getElementById('divNum_11_1_10_1L1').innerHTML ="לַיַבָּשָּה";
      document.getElementById('divNum_13_1_10_1L2').innerHTML ="LAND";
      document.getElementById('divNum_15_1_10_1L1').innerHTML ="אֶרֶץ";
      document.getElementById('divNum_17_1_10_1L2').innerHTML ="and~to~COLLECTION";
      document.getElementById('divNum_19_1_10_1L1').innerHTML ="וּלְּמִׁקְּוֵה";
      document.getElementById('divNum_21_1_10_1L2').innerHTML ="the~WATER";
      document.getElementById('divNum_23_1_10_1L1').innerHTML ="הַמַיִׁם";
      document.getElementById('divNum_25_1_10_1L2').innerHTML ="he~did~CALL.OUT(V)";
      document.getElementById('divNum_27_1_10_1L1').innerHTML ="קָּרָּא";
      document.getElementById('divNum_29_1_10_1L2').innerHTML ="SEA";
      document.getElementById('divNum_31_1_10_1L1').innerHTML ="יַמִׁים";
      document.getElementById('divNum_33_1_10_2L2').innerHTML ="and~he~will~SEE(V)";
      document.getElementById('divNum_35_1_10_2L1').innerHTML ="וַיַרְּא";
      document.getElementById('divNum_37_1_10_2L2').innerHTML ="Elohiym";
      document.getElementById('divNum_39_1_10_2L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_41_1_10_2L2').innerHTML ="GIVEN.THAT";
      document.getElementById('divNum_43_1_10_2L1').innerHTML ="כִׁי";
      document.getElementById('divNum_45_1_10_2L2').innerHTML ="FUNCTIONAL";
      document.getElementById('divNum_47_1_10_2L1').innerHTML ="טוֹב";
      document.getElementById('divNum_1_1_11_1L2').innerHTML ="and~he~will~SAY(V)";
      document.getElementById('divNum_3_1_11_1L1').innerHTML ="וַיֹאמֶר";
      document.getElementById('divNum_5_1_11_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_7_1_11_1L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_9_1_11_1L2').innerHTML ="she~will~make~SPROUT(V)";
      document.getElementById('divNum_11_1_11_1L1').innerHTML ="תַדְּשֵא";
      document.getElementById('divNum_13_1_11_1L2').innerHTML ="the~LAND";
      document.getElementById('divNum_15_1_11_1L1').innerHTML ="הָּאָרֶץ";
      document.getElementById('divNum_17_1_11_1L2').innerHTML ="GRASS";
      document.getElementById('divNum_19_1_11_1L1').innerHTML ="דֶשֶא";
      document.getElementById('divNum_21_1_11_1L2').innerHTML ="HERB";
      document.getElementById('divNum_23_1_11_1L1').innerHTML ="עֵשֶׂב";
      document.getElementById('divNum_25_1_11_1L2').innerHTML ="make~SOW(V)";
      document.getElementById('divNum_27_1_11_1L1').innerHTML ="מַזְּרִׁיעַַ";
      document.getElementById('divNum_29_1_11_1L2').innerHTML ="SEED";
      document.getElementById('divNum_31_1_11_1L1').innerHTML ="זֶרַע";
      document.getElementById('divNum_33_1_11_2L2').innerHTML ="TREE";
      document.getElementById('divNum_35_1_11_2L1').innerHTML ="עֵץ";
      document.getElementById('divNum_37_1_11_2L2').innerHTML ="PRODUCE";
      document.getElementById('divNum_39_1_11_2L1').innerHTML ="פְּרִׁי";
      document.getElementById('divNum_41_1_11_2L2').innerHTML ="DO(V)";
      document.getElementById('divNum_43_1_11_2L1').innerHTML ="עֹשֶׂה";
      document.getElementById('divNum_45_1_11_2L2').innerHTML ="PRODUCE";
      document.getElementById('divNum_47_1_11_2L1').innerHTML ="פְּרִׁי";
      document.getElementById('divNum_49_1_11_2L2').innerHTML ="to~KIND";
      document.getElementById('divNum_51_1_11_2L1').innerHTML ="לְּמִׁינוַֹ";
      document.getElementById('divNum_53_1_11_2L2').innerHTML ="WHICH";
      document.getElementById('divNum_55_1_11_2L1').innerHTML ="אֲשֶר";
      document.getElementById('divNum_57_1_11_2L2').innerHTML ="SEED";
      document.getElementById('divNum_59_1_11_2L1').innerHTML ="זַרְּעוַֹ";
      document.getElementById('divNum_61_1_11_2L2').innerHTML ="in~him";
      document.getElementById('divNum_63_1_11_2L1').innerHTML ="vo";
      document.getElementById('divNum_65_1_11_3L2').innerHTML ="1616";
      document.getElementById('divNum_67_1_11_3L1').innerHTML ="al";
      document.getElementById('divNum_69_1_11_3L2').innerHTML ="2331";
      document.getElementById('divNum_71_1_11_3L1').innerHTML ="ha'a'rets";
      document.getElementById('divNum_73_1_11_3L2').innerHTML ="505";
      document.getElementById('divNum_75_1_11_3L1').innerHTML ="wai'hi";
      document.getElementById('divNum_77_1_11_3L2').innerHTML ="968";
      document.getElementById('divNum_79_1_11_3L1').innerHTML ="kheyn1";
      document.getElementById('divNum_1_1_12_1L2').innerHTML ="and~she~will~make~GO.OUT(V)";
      document.getElementById('divNum_3_1_12_1L1').innerHTML ="וַתוֹצֵא";
      document.getElementById('divNum_5_1_12_1L2').innerHTML ="the~LAND";
      document.getElementById('divNum_7_1_12_1L1').innerHTML ="הָּאָרֶץ";
      document.getElementById('divNum_9_1_12_1L2').innerHTML ="GRASS";
      document.getElementById('divNum_11_1_12_1L1').innerHTML ="דֶשֶא";
      document.getElementById('divNum_13_1_12_1L2').innerHTML ="HERB";
      document.getElementById('divNum_15_1_12_1L1').innerHTML ="עֵשֶׂב";
      document.getElementById('divNum_17_1_12_1L2').innerHTML ="make~SOW(V)";
      document.getElementById('divNum_19_1_12_1L1').innerHTML ="מַזְּרִׁיעַַ";
      document.getElementById('divNum_21_1_12_1L2').innerHTML ="SEED";
      document.getElementById('divNum_23_1_12_1L1').innerHTML ="זֶרַע";
      document.getElementById('divNum_25_1_12_1L2').innerHTML ="to~KIND";
      document.getElementById('divNum_27_1_12_1L1').innerHTML ="לְּמִׁינֵהוּ";
      document.getElementById('divNum_29_1_12_1L2').innerHTML ="and~TREE";
      document.getElementById('divNum_31_1_12_1L1').innerHTML ="וְּעֵץ";
      document.getElementById('divNum_33_1_12_2L2').innerHTML ="DO(V)";
      document.getElementById('divNum_35_1_12_2L1').innerHTML ="עֹשֶׂה";
      document.getElementById('divNum_37_1_12_2L2').innerHTML ="PRODUCE";
      document.getElementById('divNum_39_1_12_2L1').innerHTML ="פְּרִׁי";
      document.getElementById('divNum_41_1_12_2L2').innerHTML ="WHICH";
      document.getElementById('divNum_43_1_12_2L1').innerHTML ="אֲשֶר";
      document.getElementById('divNum_45_1_12_2L2').innerHTML ="SEED";
      document.getElementById('divNum_47_1_12_2L1').innerHTML ="זַרְּעוַֹ";
      document.getElementById('divNum_49_1_12_2L2').innerHTML ="in~him";
      document.getElementById('divNum_51_1_12_2L1').innerHTML ="vo";
      document.getElementById('divNum_53_1_12_2L2').innerHTML ="1216~him";
      document.getElementById('divNum_55_1_12_2L1').innerHTML ="lê'mi'ney'hu";
      document.getElementById('divNum_57_1_12_2L2').innerHTML ="2185";
      document.getElementById('divNum_59_1_12_2L1').innerHTML ="wai'yar";
      document.getElementById('divNum_61_1_12_2L2').innerHTML ="POWER~s";
      document.getElementById('divNum_63_1_12_2L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_65_1_12_3L2').innerHTML ="940";
      document.getElementById('divNum_67_1_12_3L1').innerHTML ="ki";
      document.getElementById('divNum_69_1_12_3L2').innerHTML ="848";
      document.getElementById('divNum_71_1_12_3L1').innerHTML ="tov";
      document.getElementById('divNum_1_1_13_1L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_3_1_13_1L1').innerHTML ="וַיְּהִׁי";
      document.getElementById('divNum_5_1_13_1L2').innerHTML ="EVENING";
      document.getElementById('divNum_7_1_13_1L1').innerHTML ="עֶרֶב";
      document.getElementById('divNum_9_1_13_1L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_11_1_13_1L1').innerHTML ="וַיְּהִׁי";
      document.getElementById('divNum_13_1_13_1L2').innerHTML ="MORNING";
      document.getElementById('divNum_15_1_13_1L1').innerHTML ="בֹקֶר";
      document.getElementById('divNum_17_1_13_1L2').innerHTML ="DAY";
      document.getElementById('divNum_19_1_13_1L1').innerHTML ="יוֹם";
      document.getElementById('divNum_21_1_13_1L2').innerHTML ="THIRD";
      document.getElementById('divNum_23_1_13_1L1').innerHTML ="שְּלִׁישִׁי";
      document.getElementById('divNum_1_1_14_1L2').innerHTML ="and~he~will~SAY(V)";
      document.getElementById('divNum_3_1_14_1L1').innerHTML ="וַיֹאמֶר";
      document.getElementById('divNum_5_1_14_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_7_1_14_1L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_9_1_14_1L2').innerHTML ="he~will~EXIST(V)";
      document.getElementById('divNum_11_1_14_1L1').innerHTML ="יְּהִׁי";
      document.getElementById('divNum_13_1_14_1L2').innerHTML ="LUMINARY";
      document.getElementById('divNum_15_1_14_1L1').innerHTML ="מְּאֹרֹת";
      document.getElementById('divNum_17_1_14_1L2').innerHTML ="in~SHEET";
      document.getElementById('divNum_19_1_14_1L1').innerHTML ="בִׁרְּקִׁיעַַ";
      document.getElementById('divNum_21_1_14_1L2').innerHTML ="the~SKY";
      document.getElementById('divNum_23_1_14_1L1').innerHTML ="הַשָּמַיִׁם";
      document.getElementById('divNum_25_1_14_1L2').innerHTML ="to~>~make~SEPARATE(V)";
      document.getElementById('divNum_27_1_14_1L1').innerHTML ="לְּהַבְּדִׁיל";
      document.getElementById('divNum_29_1_14_1L2').innerHTML ="BETWEEN";
      document.getElementById('divNum_31_1_14_1L1').innerHTML ="בֵין";
      document.getElementById('divNum_33_1_14_2L2').innerHTML ="the~DAY";
      document.getElementById('divNum_35_1_14_2L1').innerHTML ="הַיוֹם";
      document.getElementById('divNum_37_1_14_2L2').innerHTML ="and~BETWEEN";
      document.getElementById('divNum_39_1_14_2L1').innerHTML ="וּבֵין";
      document.getElementById('divNum_41_1_14_2L2').innerHTML ="the~NIGHT";
      document.getElementById('divNum_43_1_14_2L1').innerHTML ="הַלָּיְּלָּה";
      document.getElementById('divNum_45_1_14_2L2').innerHTML ="and~they(cp)~did~EXIST(V)";
      document.getElementById('divNum_47_1_14_2L1').innerHTML ="וְּהָּיוּ";
      document.getElementById('divNum_49_1_14_2L2').innerHTML ="to~SIGN";
      document.getElementById('divNum_51_1_14_2L1').innerHTML ="לְּאֹתֹת";
      document.getElementById('divNum_53_1_14_2L2').innerHTML ="and~to~APPOINTED";
      document.getElementById('divNum_55_1_14_2L1').innerHTML ="וּלְּמוֹעֲדִׁים";
      document.getElementById('divNum_57_1_14_2L2').innerHTML ="and~to~DAY";
      document.getElementById('divNum_59_1_14_2L1').innerHTML ="וּלְּיָּמִׁים";
      document.getElementById('divNum_61_1_14_2L2').innerHTML ="and~YEAR";
      document.getElementById('divNum_63_1_14_2L1').innerHTML ="וְּשָּנִׁים";
      document.getElementById('divNum_1_1_15_1L2').innerHTML ="and~they(cp)~did~EXIST(V)";
      document.getElementById('divNum_3_1_15_1L1').innerHTML ="וְּהָּיוּ";
      document.getElementById('divNum_5_1_15_1L2').innerHTML ="to~LUMINARY";
      document.getElementById('divNum_7_1_15_1L1').innerHTML ="לִׁמְּאוֹרֹת";
      document.getElementById('divNum_9_1_15_1L2').innerHTML ="in~SHEET";
      document.getElementById('divNum_11_1_15_1L1').innerHTML ="בִׁרְּקִׁיעַַ";
      document.getElementById('divNum_13_1_15_1L2').innerHTML ="the~SKY";
      document.getElementById('divNum_15_1_15_1L1').innerHTML ="הַשָּמַיִׁם";
      document.getElementById('divNum_17_1_15_1L2').innerHTML ="to~>~make~LIGHT(V)";
      document.getElementById('divNum_19_1_15_1L1').innerHTML ="לְּהָּאִׁיר";
      document.getElementById('divNum_21_1_15_1L2').innerHTML ="UPON";
      document.getElementById('divNum_23_1_15_1L1').innerHTML ="עַל";
      document.getElementById('divNum_25_1_15_1L2').innerHTML ="the~LAND";
      document.getElementById('divNum_27_1_15_1L1').innerHTML ="הָּאָרֶץ";
      document.getElementById('divNum_29_1_15_1L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_31_1_15_1L1').innerHTML ="וַיְּהִׁי";
      document.getElementById('divNum_33_1_15_2L2').innerHTML ="SO";
      document.getElementById('divNum_35_1_15_2L1').innerHTML ="כֵן";
      document.getElementById('divNum_1_1_16_1L2').innerHTML ="and~he~will~DO(V)";
      document.getElementById('divNum_3_1_16_1L1').innerHTML ="וַיַעַשׂ";
      document.getElementById('divNum_5_1_16_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_7_1_16_1L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_9_1_16_1L2').innerHTML ="AT";
      document.getElementById('divNum_11_1_16_1L1').innerHTML ="אֶת";
      document.getElementById('divNum_13_1_16_1L2').innerHTML ="TWO";
      document.getElementById('divNum_15_1_16_1L1').innerHTML ="שְּנֵי";
      document.getElementById('divNum_17_1_16_1L2').innerHTML ="the~LUMINARY";
      document.getElementById('divNum_19_1_16_1L1').innerHTML ="הַמְּאֹרֹת";
      document.getElementById('divNum_21_1_16_1L2').innerHTML ="the~GREAT";
      document.getElementById('divNum_23_1_16_1L1').innerHTML ="הַגְּדֹלִׁים";
      document.getElementById('divNum_25_1_16_1L2').innerHTML ="AT";
      document.getElementById('divNum_27_1_16_1L1').innerHTML ="אֶת";
      document.getElementById('divNum_29_1_16_1L2').innerHTML ="the~LUMINARY";
      document.getElementById('divNum_31_1_16_1L1').innerHTML ="הַמָּאוֹר";
      document.getElementById('divNum_33_1_16_2L2').innerHTML ="the~GREAT";
      document.getElementById('divNum_35_1_16_2L1').innerHTML ="הַגָּדֹל";
      document.getElementById('divNum_37_1_16_2L2').innerHTML ="to~REGULATION";
      document.getElementById('divNum_39_1_16_2L1').innerHTML ="לְּמֶמְּשֶלֶת";
      document.getElementById('divNum_41_1_16_2L2').innerHTML ="the~DAY";
      document.getElementById('divNum_43_1_16_2L1').innerHTML ="הַיוֹם";
      document.getElementById('divNum_45_1_16_2L2').innerHTML ="and~AT";
      document.getElementById('divNum_47_1_16_2L1').innerHTML ="וְּאֶת";
      document.getElementById('divNum_49_1_16_2L2').innerHTML ="the~LUMINARY";
      document.getElementById('divNum_51_1_16_2L1').innerHTML ="הַמָּאוֹר";
      document.getElementById('divNum_53_1_16_2L2').innerHTML ="the~SMALL";
      document.getElementById('divNum_55_1_16_2L1').innerHTML ="הַקָּטֹן";
      document.getElementById('divNum_57_1_16_2L2').innerHTML ="to~REGULATION";
      document.getElementById('divNum_59_1_16_2L1').innerHTML ="לְּמֶמְּשֶלֶת";
      document.getElementById('divNum_61_1_16_2L2').innerHTML ="the~NIGHT";
      document.getElementById('divNum_63_1_16_2L1').innerHTML ="הַלַיְּלָּה";
      document.getElementById('divNum_65_1_16_3L2').innerHTML ="and~AT";
      document.getElementById('divNum_67_1_16_3L1').innerHTML ="וְּאֵת";
      document.getElementById('divNum_69_1_16_3L2').innerHTML ="the~STAR";
      document.getElementById('divNum_71_1_16_3L1').innerHTML ="הַכוֹכָּבִׁים";
      document.getElementById('divNum_1_1_17_1L2').innerHTML ="and~he~will~GIVE(V)";
      document.getElementById('divNum_3_1_17_1L1').innerHTML ="וַיִׁתֵן";
      document.getElementById('divNum_5_1_17_1L2').innerHTML ="AT";
      document.getElementById('divNum_7_1_17_1L1').innerHTML ="אֹתָּם";
      document.getElementById('divNum_9_1_17_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_11_1_17_1L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_13_1_17_1L2').innerHTML ="in~SHEET";
      document.getElementById('divNum_15_1_17_1L1').innerHTML ="בִׁרְּקִׁיעַַ";
      document.getElementById('divNum_17_1_17_1L2').innerHTML ="the~SKY";
      document.getElementById('divNum_19_1_17_1L1').innerHTML ="הַשָּמָּיִׁם";
      document.getElementById('divNum_21_1_17_1L2').innerHTML ="to~>~make~LIGHT(V)";
      document.getElementById('divNum_23_1_17_1L1').innerHTML ="לְּהָּאִׁיר";
      document.getElementById('divNum_25_1_17_1L2').innerHTML ="UPON";
      document.getElementById('divNum_27_1_17_1L1').innerHTML ="עַל";
      document.getElementById('divNum_29_1_17_1L2').innerHTML ="the~LAND";
      document.getElementById('divNum_31_1_17_1L1').innerHTML ="הָּאָרֶץ";
      document.getElementById('divNum_1_1_18_1L2').innerHTML ="and~to~>~REGULATE(V)";
      document.getElementById('divNum_3_1_18_1L1').innerHTML ="וְּלִׁמְּשֹל";
      document.getElementById('divNum_5_1_18_1L2').innerHTML ="in~the~DAY";
      document.getElementById('divNum_7_1_18_1L1').innerHTML ="בַיוֹם";
      document.getElementById('divNum_9_1_18_1L2').innerHTML ="and~in~NIGHT";
      document.getElementById('divNum_11_1_18_1L1').innerHTML ="וּבַלַיְּלָּה";
      document.getElementById('divNum_13_1_18_1L2').innerHTML ="and~to~>~make~SEPARATE(V)";
      document.getElementById('divNum_15_1_18_1L1').innerHTML ="וּלְּהַבְּדִׁיל";
      document.getElementById('divNum_17_1_18_1L2').innerHTML ="BETWEEN";
      document.getElementById('divNum_19_1_18_1L1').innerHTML ="בֵין";
      document.getElementById('divNum_21_1_18_1L2').innerHTML ="the~LIGHT";
      document.getElementById('divNum_23_1_18_1L1').innerHTML ="הָּאוֹר";
      document.getElementById('divNum_25_1_18_1L2').innerHTML ="and~BETWEEN";
      document.getElementById('divNum_27_1_18_1L1').innerHTML ="וּבֵין";
      document.getElementById('divNum_29_1_18_1L2').innerHTML ="the~DARKNESS";
      document.getElementById('divNum_31_1_18_1L1').innerHTML ="הַחֹשֶךְ";
      document.getElementById('divNum_33_1_18_2L2').innerHTML ="and~he~will~SEE(V)";
      document.getElementById('divNum_35_1_18_2L1').innerHTML ="וַיַרְּא";
      document.getElementById('divNum_37_1_18_2L2').innerHTML ="Elohiym";
      document.getElementById('divNum_39_1_18_2L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_41_1_18_2L2').innerHTML ="GIVEN.THAT";
      document.getElementById('divNum_43_1_18_2L1').innerHTML ="כִׁי";
      document.getElementById('divNum_45_1_18_2L2').innerHTML ="FUNCTIONAL";
      document.getElementById('divNum_47_1_18_2L1').innerHTML ="טוֹב";
      document.getElementById('divNum_1_1_19_1L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_3_1_19_1L1').innerHTML ="וַיְּהִׁי";
      document.getElementById('divNum_5_1_19_1L2').innerHTML ="EVENING";
      document.getElementById('divNum_7_1_19_1L1').innerHTML ="עֶרֶב";
      document.getElementById('divNum_9_1_19_1L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_11_1_19_1L1').innerHTML ="וַיְּהִׁי";
      document.getElementById('divNum_13_1_19_1L2').innerHTML ="MORNING";
      document.getElementById('divNum_15_1_19_1L1').innerHTML ="בֹקֶר";
      document.getElementById('divNum_17_1_19_1L2').innerHTML ="DAY";
      document.getElementById('divNum_19_1_19_1L1').innerHTML ="יוֹם";
      document.getElementById('divNum_21_1_19_1L2').innerHTML ="FOURTH";
      document.getElementById('divNum_23_1_19_1L1').innerHTML ="רְּבִׁיעִׁי";
      document.getElementById('divNum_1_1_20_1L2').innerHTML ="and~he~will~SAY(V)";
      document.getElementById('divNum_3_1_20_1L1').innerHTML ="וַיֹאמֶר";
      document.getElementById('divNum_5_1_20_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_7_1_20_1L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_9_1_20_1L2').innerHTML ="they(mp)~will~SWARM(V)";
      document.getElementById('divNum_11_1_20_1L1').innerHTML ="יִׁשְּרְּצוּ";
      document.getElementById('divNum_13_1_20_1L2').innerHTML ="the~WATER";
      document.getElementById('divNum_15_1_20_1L1').innerHTML ="הַמַיִׁם";
      document.getElementById('divNum_17_1_20_1L2').innerHTML ="SWARMER";
      document.getElementById('divNum_19_1_20_1L1').innerHTML ="שֶרֶץ";
      document.getElementById('divNum_21_1_20_1L2').innerHTML ="BEING";
      document.getElementById('divNum_23_1_20_1L1').innerHTML ="נֶפֶש";
      document.getElementById('divNum_25_1_20_1L2').innerHTML ="LIVING";
      document.getElementById('divNum_27_1_20_1L1').innerHTML ="חַיָּה";
      document.getElementById('divNum_29_1_20_1L2').innerHTML ="and~FLYER";
      document.getElementById('divNum_31_1_20_1L1').innerHTML ="וְּעוֹף";
      document.getElementById('divNum_33_1_20_2L2').innerHTML ="he~will~much~FLY(V)";
      document.getElementById('divNum_35_1_20_2L1').innerHTML ="יְּעוֹפֵף";
      document.getElementById('divNum_37_1_20_2L2').innerHTML ="UPON";
      document.getElementById('divNum_39_1_20_2L1').innerHTML ="עַל";
      document.getElementById('divNum_41_1_20_2L2').innerHTML ="the~LAND";
      document.getElementById('divNum_43_1_20_2L1').innerHTML ="הָּאָרֶץ";
      document.getElementById('divNum_45_1_20_2L2').innerHTML ="UPON";
      document.getElementById('divNum_47_1_20_2L1').innerHTML ="עַל";
      document.getElementById('divNum_49_1_20_2L2').innerHTML ="FACE";
      document.getElementById('divNum_51_1_20_2L1').innerHTML ="פְּנֵי";
      document.getElementById('divNum_53_1_20_2L2').innerHTML ="SHEET";
      document.getElementById('divNum_55_1_20_2L1').innerHTML ="רְּקִׁיעַַ";
      document.getElementById('divNum_57_1_20_2L2').innerHTML ="the~SKY";
      document.getElementById('divNum_59_1_20_2L1').innerHTML ="הַשָּמָּיִׁם";
      document.getElementById('divNum_1_1_21_1L2').innerHTML ="and~he~will~FATTEN(V)";
      document.getElementById('divNum_3_1_21_1L1').innerHTML ="וַיִׁבְּרָּא";
      document.getElementById('divNum_5_1_21_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_7_1_21_1L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_9_1_21_1L2').innerHTML ="AT";
      document.getElementById('divNum_11_1_21_1L1').innerHTML ="אֶת";
      document.getElementById('divNum_13_1_21_1L2').innerHTML ="the~CROCODILE";
      document.getElementById('divNum_15_1_21_1L1').innerHTML ="הַתַנִׁינִׁם";
      document.getElementById('divNum_17_1_21_1L2').innerHTML ="the~GREAT";
      document.getElementById('divNum_19_1_21_1L1').innerHTML ="הַגְּדֹלִׁים";
      document.getElementById('divNum_21_1_21_1L2').innerHTML ="and~AT";
      document.getElementById('divNum_23_1_21_1L1').innerHTML ="וְּאֵת";
      document.getElementById('divNum_25_1_21_1L2').innerHTML ="ALL";
      document.getElementById('divNum_27_1_21_1L1').innerHTML ="כָּל";
      document.getElementById('divNum_29_1_21_1L2').innerHTML ="BEING";
      document.getElementById('divNum_31_1_21_1L1').innerHTML ="נֶפֶש";
      document.getElementById('divNum_33_1_21_2L2').innerHTML ="the~LIVING";
      document.getElementById('divNum_35_1_21_2L1').innerHTML ="הַחַיָּה";
      document.getElementById('divNum_37_1_21_2L2').innerHTML ="the~TREAD(V)";
      document.getElementById('divNum_39_1_21_2L1').innerHTML ="הָּרֹמֶשֶׂת";
      document.getElementById('divNum_41_1_21_2L2').innerHTML ="WHICH";
      document.getElementById('divNum_43_1_21_2L1').innerHTML ="אֲשֶר";
      document.getElementById('divNum_45_1_21_2L2').innerHTML ="they(mp)~did~SWARM(V)";
      document.getElementById('divNum_47_1_21_2L1').innerHTML ="שָּרְּצוּ";
      document.getElementById('divNum_49_1_21_2L2').innerHTML ="the~WATER";
      document.getElementById('divNum_51_1_21_2L1').innerHTML ="הַמַיִׁם";
      document.getElementById('divNum_53_1_21_2L2').innerHTML ="to~KIND";
      document.getElementById('divNum_55_1_21_2L1').innerHTML ="לְּמִׁינֵהֶם";
      document.getElementById('divNum_57_1_21_2L2').innerHTML ="and~AT";
      document.getElementById('divNum_59_1_21_2L1').innerHTML ="וְּאֵת";
      document.getElementById('divNum_61_1_21_2L2').innerHTML ="ALL";
      document.getElementById('divNum_63_1_21_2L1').innerHTML ="כָּל";
      document.getElementById('divNum_65_1_21_3L2').innerHTML ="FLYER";
      document.getElementById('divNum_67_1_21_3L1').innerHTML ="עוֹף";
      document.getElementById('divNum_69_1_21_3L2').innerHTML ="WING";
      document.getElementById('divNum_71_1_21_3L1').innerHTML ="כָּנָּף";
      document.getElementById('divNum_73_1_21_3L2').innerHTML ="to~KIND";
      document.getElementById('divNum_75_1_21_3L1').innerHTML ="לְּמִׁינֵהוּ";
      document.getElementById('divNum_77_1_21_3L2').innerHTML ="and~he~will~SEE(V)";
      document.getElementById('divNum_79_1_21_3L1').innerHTML ="וַיַרְּא";
      document.getElementById('divNum_81_1_21_3L2').innerHTML ="Elohiym";
      document.getElementById('divNum_83_1_21_3L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_85_1_21_3L2').innerHTML ="GIVEN.THAT";
      document.getElementById('divNum_87_1_21_3L1').innerHTML ="כִׁי";
      document.getElementById('divNum_89_1_21_3L2').innerHTML ="FUNCTIONAL";
      document.getElementById('divNum_91_1_21_3L1').innerHTML ="טוֹב";
      document.getElementById('divNum_1_1_22_1L2').innerHTML ="and~he~will~much~KNEEL(V)";
      document.getElementById('divNum_3_1_22_1L1').innerHTML ="וַיְּבָּרֶךְ";
      document.getElementById('divNum_5_1_22_1L2').innerHTML ="AT";
      document.getElementById('divNum_7_1_22_1L1').innerHTML ="אֹתָּם";
      document.getElementById('divNum_9_1_22_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_11_1_22_1L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_13_1_22_1L2').innerHTML ="to~>~SAY(V)";
      document.getElementById('divNum_15_1_22_1L1').innerHTML ="לֵאמֹר";
      document.getElementById('divNum_17_1_22_1L2').innerHTML ="!(mp)~REPRODUCE(V)";
      document.getElementById('divNum_19_1_22_1L1').innerHTML ="פְּרוּ";
      document.getElementById('divNum_21_1_22_1L2').innerHTML ="and~!(mp)~INCREASE(V)";
      document.getElementById('divNum_23_1_22_1L1').innerHTML ="וּרְּבוּ";
      document.getElementById('divNum_25_1_22_1L2').innerHTML ="and~!(mp)~FILL(V)";
      document.getElementById('divNum_27_1_22_1L1').innerHTML ="וּמִׁלְּאוּ";
      document.getElementById('divNum_29_1_22_1L2').innerHTML ="AT";
      document.getElementById('divNum_31_1_22_1L1').innerHTML ="אֶת";
      document.getElementById('divNum_33_1_22_2L2').innerHTML ="the~WATER";
      document.getElementById('divNum_35_1_22_2L1').innerHTML ="הַמַיִׁם";
      document.getElementById('divNum_37_1_22_2L2').innerHTML ="in~the~SEA";
      document.getElementById('divNum_39_1_22_2L1').innerHTML ="בַיַמִׁים";
      document.getElementById('divNum_41_1_22_2L2').innerHTML ="and~the~FLYER";
      document.getElementById('divNum_43_1_22_2L1').innerHTML ="וְּהָּעוֹף";
      document.getElementById('divNum_45_1_22_2L2').innerHTML ="he~did~INCREASE(V)";
      document.getElementById('divNum_47_1_22_2L1').innerHTML ="יִׁרֶב";
      document.getElementById('divNum_49_1_22_2L2').innerHTML ="in~the~LAND";
      document.getElementById('divNum_51_1_22_2L1').innerHTML ="בָּאָרֶץ";
      document.getElementById('divNum_1_1_23_1L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_3_1_23_1L1').innerHTML ="וַיְּהִׁי";
      document.getElementById('divNum_5_1_23_1L2').innerHTML ="EVENING";
      document.getElementById('divNum_7_1_23_1L1').innerHTML ="עֶרֶב";
      document.getElementById('divNum_9_1_23_1L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_11_1_23_1L1').innerHTML ="וַיְּהִׁי";
      document.getElementById('divNum_13_1_23_1L2').innerHTML ="MORNING";
      document.getElementById('divNum_15_1_23_1L1').innerHTML ="בֹקֶר";
      document.getElementById('divNum_17_1_23_1L2').innerHTML ="DAY";
      document.getElementById('divNum_19_1_23_1L1').innerHTML ="יוֹם";
      document.getElementById('divNum_21_1_23_1L2').innerHTML ="FIFTH";
      document.getElementById('divNum_23_1_23_1L1').innerHTML ="חֲמִׁישִׁי";
      document.getElementById('divNum_1_1_24_1L2').innerHTML ="and~he~will~SAY(V)";
      document.getElementById('divNum_3_1_24_1L1').innerHTML ="וַיֹאמֶר";
      document.getElementById('divNum_5_1_24_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_7_1_24_1L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_9_1_24_1L2').innerHTML ="she~will~make~GO.OUT(V)";
      document.getElementById('divNum_11_1_24_1L1').innerHTML ="תוֹצֵא";
      document.getElementById('divNum_13_1_24_1L2').innerHTML ="the~LAND";
      document.getElementById('divNum_15_1_24_1L1').innerHTML ="הָּאָרֶץ";
      document.getElementById('divNum_17_1_24_1L2').innerHTML ="BEING";
      document.getElementById('divNum_19_1_24_1L1').innerHTML ="נֶפֶש";
      document.getElementById('divNum_21_1_24_1L2').innerHTML ="LIVING";
      document.getElementById('divNum_23_1_24_1L1').innerHTML ="חַיָּה";
      document.getElementById('divNum_25_1_24_1L2').innerHTML ="to~KIND";
      document.getElementById('divNum_27_1_24_1L1').innerHTML ="לְּמִׁינָּהּ";
      document.getElementById('divNum_29_1_24_1L2').innerHTML ="BEAST";
      document.getElementById('divNum_31_1_24_1L1').innerHTML ="בְּהֵמָּה";
      document.getElementById('divNum_33_1_24_2L2').innerHTML ="and~TREADER";
      document.getElementById('divNum_35_1_24_2L1').innerHTML ="וָּרֶמֶשׂ";
      document.getElementById('divNum_37_1_24_2L2').innerHTML ="and~LIVING";
      document.getElementById('divNum_39_1_24_2L1').innerHTML ="וְּחַיְּתוַֹ";
      document.getElementById('divNum_41_1_24_2L2').innerHTML ="LAND";
      document.getElementById('divNum_43_1_24_2L1').innerHTML ="אֶרֶץ";
      document.getElementById('divNum_45_1_24_2L2').innerHTML ="to~KIND";
      document.getElementById('divNum_47_1_24_2L1').innerHTML ="לְּמִׁינָּהּ";
      document.getElementById('divNum_49_1_24_2L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_51_1_24_2L1').innerHTML ="וַיְּהִׁי";
      document.getElementById('divNum_53_1_24_2L2').innerHTML ="SO";
      document.getElementById('divNum_55_1_24_2L1').innerHTML ="כֵן";
      document.getElementById('divNum_1_1_25_1L2').innerHTML ="and~he~will~DO(V)";
      document.getElementById('divNum_3_1_25_1L1').innerHTML ="וַיַעַשׂ";
      document.getElementById('divNum_5_1_25_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_7_1_25_1L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_9_1_25_1L2').innerHTML ="AT";
      document.getElementById('divNum_11_1_25_1L1').innerHTML ="אֶת";
      document.getElementById('divNum_13_1_25_1L2').innerHTML ="LIVING";
      document.getElementById('divNum_15_1_25_1L1').innerHTML ="חַיַת";
      document.getElementById('divNum_17_1_25_1L2').innerHTML ="the~LAND";
      document.getElementById('divNum_19_1_25_1L1').innerHTML ="הָּאָרֶץ";
      document.getElementById('divNum_21_1_25_1L2').innerHTML ="to~KIND";
      document.getElementById('divNum_23_1_25_1L1').innerHTML ="לְּמִׁינָּהּ";
      document.getElementById('divNum_25_1_25_1L2').innerHTML ="and~AT";
      document.getElementById('divNum_27_1_25_1L1').innerHTML ="וְּאֶת";
      document.getElementById('divNum_29_1_25_1L2').innerHTML ="the~BEAST";
      document.getElementById('divNum_31_1_25_1L1').innerHTML ="הַבְּהֵמָּה";
      document.getElementById('divNum_33_1_25_2L2').innerHTML ="to~KIND";
      document.getElementById('divNum_35_1_25_2L1').innerHTML ="לְּמִׁינָּהּ";
      document.getElementById('divNum_37_1_25_2L2').innerHTML ="and~AT";
      document.getElementById('divNum_39_1_25_2L1').innerHTML ="וְּאֵת";
      document.getElementById('divNum_41_1_25_2L2').innerHTML ="ALL";
      document.getElementById('divNum_43_1_25_2L1').innerHTML ="כָּל";
      document.getElementById('divNum_45_1_25_2L2').innerHTML ="TREADER";
      document.getElementById('divNum_47_1_25_2L1').innerHTML ="רֶמֶשׂ";
      document.getElementById('divNum_49_1_25_2L2').innerHTML ="the~GROUND";
      document.getElementById('divNum_51_1_25_2L1').innerHTML ="הָּאֲדָּמָּה";
      document.getElementById('divNum_53_1_25_2L2').innerHTML ="to~KIND";
      document.getElementById('divNum_55_1_25_2L1').innerHTML ="לְּמִׁינֵהוּ";
      document.getElementById('divNum_57_1_25_2L2').innerHTML ="and~he~will~SEE(V)";
      document.getElementById('divNum_59_1_25_2L1').innerHTML ="וַיַרְּא";
      document.getElementById('divNum_61_1_25_2L2').innerHTML ="Elohiym";
      document.getElementById('divNum_63_1_25_2L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_65_1_25_3L2').innerHTML ="GIVEN.THAT";
      document.getElementById('divNum_67_1_25_3L1').innerHTML ="כִׁי";
      document.getElementById('divNum_69_1_25_3L2').innerHTML ="FUNCTIONAL";
      document.getElementById('divNum_71_1_25_3L1').innerHTML ="טוֹב";
      document.getElementById('divNum_1_1_26_1L2').innerHTML ="and~he~will~SAY(V)";
      document.getElementById('divNum_3_1_26_1L1').innerHTML ="וַיֹאמֶר";
      document.getElementById('divNum_5_1_26_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_7_1_26_1L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_9_1_26_1L2').innerHTML ="we(cp)~will~DO(V)";
      document.getElementById('divNum_11_1_26_1L1').innerHTML ="נַעֲשֶׂה";
      document.getElementById('divNum_13_1_26_1L2').innerHTML ="HUMAN";
      document.getElementById('divNum_15_1_26_1L1').innerHTML ="אָדָּם";
      document.getElementById('divNum_17_1_26_1L2').innerHTML ="in~IMAGE";
      document.getElementById('divNum_19_1_26_1L1').innerHTML ="בְּצַלְּמֵנוּ";
      document.getElementById('divNum_21_1_26_1L2').innerHTML ="like~LIKENESS";
      document.getElementById('divNum_23_1_26_1L1').innerHTML ="כִׁדְּמוּתֵנוּ";
      document.getElementById('divNum_25_1_26_1L2').innerHTML ="and~he~did~RULE(V)";
      document.getElementById('divNum_27_1_26_1L1').innerHTML ="וְּיִׁרְּדוּ";
      document.getElementById('divNum_29_1_26_1L2').innerHTML ="in~FISH";
      document.getElementById('divNum_31_1_26_1L1').innerHTML ="בִׁדְּגַת";
      document.getElementById('divNum_33_1_26_2L2').innerHTML ="the~SEA";
      document.getElementById('divNum_35_1_26_2L1').innerHTML ="הַיָּם";
      document.getElementById('divNum_37_1_26_2L2').innerHTML ="and~in~FLYER";
      document.getElementById('divNum_39_1_26_2L1').innerHTML ="וּבְּעוֹף";
      document.getElementById('divNum_41_1_26_2L2').innerHTML ="the~SKY";
      document.getElementById('divNum_43_1_26_2L1').innerHTML ="הַשָּמַיִׁם";
      document.getElementById('divNum_45_1_26_2L2').innerHTML ="and~in~the~BEAST";
      document.getElementById('divNum_47_1_26_2L1').innerHTML ="וּבַבְּהֵמָּה";
      document.getElementById('divNum_49_1_26_2L2').innerHTML ="and~in~ALL";
      document.getElementById('divNum_51_1_26_2L1').innerHTML ="וּבְּכָּל";
      document.getElementById('divNum_53_1_26_2L2').innerHTML ="the~LAND";
      document.getElementById('divNum_55_1_26_2L1').innerHTML ="הָּאָרֶץ";
      document.getElementById('divNum_57_1_26_2L2').innerHTML ="and~in~ALL";
      document.getElementById('divNum_59_1_26_2L1').innerHTML ="וּבְּכָּל";
      document.getElementById('divNum_61_1_26_2L2').innerHTML ="the~TREADER";
      document.getElementById('divNum_63_1_26_2L1').innerHTML ="הָּרֶמֶשׂ";
      document.getElementById('divNum_65_1_26_3L2').innerHTML ="the~TREAD(V)";
      document.getElementById('divNum_67_1_26_3L1').innerHTML ="הָּרֹמֵשׂ";
      document.getElementById('divNum_69_1_26_3L2').innerHTML ="UPON";
      document.getElementById('divNum_71_1_26_3L1').innerHTML ="עַל";
      document.getElementById('divNum_73_1_26_3L2').innerHTML ="the~LAND";
      document.getElementById('divNum_75_1_26_3L1').innerHTML ="הָּאָרֶץ";
      document.getElementById('divNum_1_1_27_1L2').innerHTML ="and~he~will~FATTEN(V)";
      document.getElementById('divNum_3_1_27_1L1').innerHTML ="וַיִׁבְּרָּא";
      document.getElementById('divNum_5_1_27_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_7_1_27_1L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_9_1_27_1L2').innerHTML ="AT";
      document.getElementById('divNum_11_1_27_1L1').innerHTML ="אֶת";
      document.getElementById('divNum_13_1_27_1L2').innerHTML ="the~HUMAN";
      document.getElementById('divNum_15_1_27_1L1').innerHTML ="הָּאָדָּם";
      document.getElementById('divNum_17_1_27_1L2').innerHTML ="in~IMAGE";
      document.getElementById('divNum_19_1_27_1L1').innerHTML ="בְּצַלְּמוַֹ";
      document.getElementById('divNum_21_1_27_1L2').innerHTML ="in~IMAGE";
      document.getElementById('divNum_23_1_27_1L1').innerHTML ="בְּצֶלֶם";
      document.getElementById('divNum_25_1_27_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_27_1_27_1L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_1_1_28_1L2').innerHTML ="and~he~will~much~KNEEL(V)";
      document.getElementById('divNum_3_1_28_1L1').innerHTML ="וַיְּבָּרֶךְ";
      document.getElementById('divNum_5_1_28_1L2').innerHTML ="AT";
      document.getElementById('divNum_7_1_28_1L1').innerHTML ="אֹתָּם";
      document.getElementById('divNum_9_1_28_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_11_1_28_1L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_13_1_28_1L2').innerHTML ="and~he~will~SAY(V)";
      document.getElementById('divNum_15_1_28_1L1').innerHTML ="וַיֹאמֶר";
      document.getElementById('divNum_17_1_28_1L2').innerHTML ="to~them(mp)";
      document.getElementById('divNum_19_1_28_1L1').innerHTML ="la'hem";
      document.getElementById('divNum_21_1_28_1L2').innerHTML ="POWER~s";
      document.getElementById('divNum_23_1_28_1L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_25_1_28_1L2').innerHTML ="1858";
      document.getElementById('divNum_27_1_28_1L1').innerHTML ="pê'ru";
      document.getElementById('divNum_29_1_28_1L2').innerHTML ="2197";
      document.getElementById('divNum_31_1_28_1L1').innerHTML ="ur'vu";
      document.getElementById('divNum_33_1_28_2L2').innerHTML ="1192";
      document.getElementById('divNum_35_1_28_2L1').innerHTML ="u'mil'u";
      document.getElementById('divNum_37_1_28_2L2').innerHTML ="85";
      document.getElementById('divNum_39_1_28_2L1').innerHTML ="et";
      document.getElementById('divNum_41_1_28_2L2').innerHTML ="2331";
      document.getElementById('divNum_43_1_28_2L1').innerHTML ="ha'a'rets";
      document.getElementById('divNum_45_1_28_2L2').innerHTML ="205~her";
      document.getElementById('divNum_47_1_28_2L1').innerHTML ="wê'khiv'shu'ah";
      document.getElementById('divNum_49_1_28_2L2').innerHTML ="2235";
      document.getElementById('divNum_51_1_28_2L1').innerHTML ="ur'du";
      document.getElementById('divNum_53_1_28_2L2').innerHTML ="395";
      document.getElementById('divNum_55_1_28_2L1').innerHTML ="bid'gat";
      document.getElementById('divNum_57_1_28_2L2').innerHTML ="895";
      document.getElementById('divNum_59_1_28_2L1').innerHTML ="hai'yam";
      document.getElementById('divNum_61_1_28_2L2').innerHTML ="1701";
      document.getElementById('divNum_63_1_28_2L1').innerHTML ="uv'oph";
      document.getElementById('divNum_65_1_28_3L2').innerHTML ="2512~s2";
      document.getElementById('divNum_67_1_28_3L1').innerHTML ="ha'sha'ma'yim";
      document.getElementById('divNum_69_1_28_3L2').innerHTML ="957";
      document.getElementById('divNum_71_1_28_3L1').innerHTML ="uv'khol";
      document.getElementById('divNum_73_1_28_3L2').innerHTML ="667";
      document.getElementById('divNum_75_1_28_3L1').innerHTML ="hhai'yah";
      document.getElementById('divNum_77_1_28_3L2').innerHTML ="2312~ing(fs)";
      document.getElementById('divNum_79_1_28_3L1').innerHTML ="ha'ro'me'set";
      document.getElementById('divNum_81_1_28_3L2').innerHTML ="1616";
      document.getElementById('divNum_83_1_28_3L1').innerHTML ="al";
      document.getElementById('divNum_85_1_28_3L2').innerHTML ="2331";
      document.getElementById('divNum_87_1_28_3L1').innerHTML ="ha'a'rets";
      document.getElementById('divNum_1_1_29_1L2').innerHTML ="and~he~will~SAY(V)";
      document.getElementById('divNum_3_1_29_1L1').innerHTML ="וַיֹאמֶר";
      document.getElementById('divNum_5_1_29_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_7_1_29_1L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_9_1_29_1L2').innerHTML ="LOOK";
      document.getElementById('divNum_11_1_29_1L1').innerHTML ="הִׁנֵה";
      document.getElementById('divNum_13_1_29_1L2').innerHTML ="I(cs)~did~GIVE(V)";
      document.getElementById('divNum_15_1_29_1L1').innerHTML ="נָּתַתִׁי";
      document.getElementById('divNum_17_1_29_1L2').innerHTML ="to~you(mp)";
      document.getElementById('divNum_19_1_29_1L1').innerHTML ="la'khem";
      document.getElementById('divNum_21_1_29_1L2').innerHTML ="85";
      document.getElementById('divNum_23_1_29_1L1').innerHTML ="et";
      document.getElementById('divNum_25_1_29_1L2').innerHTML ="957";
      document.getElementById('divNum_27_1_29_1L1').innerHTML ="kol";
      document.getElementById('divNum_29_1_29_1L2').innerHTML ="1691";
      document.getElementById('divNum_31_1_29_1L1').innerHTML ="ey'sev";
      document.getElementById('divNum_33_1_29_2L2').innerHTML ="605~ing(ms)";
      document.getElementById('divNum_35_1_29_2L1').innerHTML ="zo'rey'a";
      document.getElementById('divNum_37_1_29_2L2').innerHTML ="606";
      document.getElementById('divNum_39_1_29_2L1').innerHTML ="ze'ra";
      document.getElementById('divNum_41_1_29_2L2').innerHTML ="2589";
      document.getElementById('divNum_43_1_29_2L1').innerHTML ="a'sher";
      document.getElementById('divNum_45_1_29_2L2').innerHTML ="1616";
      document.getElementById('divNum_47_1_29_2L1').innerHTML ="al";
      document.getElementById('divNum_49_1_29_2L2').innerHTML ="1815~s";
      document.getElementById('divNum_51_1_29_2L1').innerHTML ="pê'ney";
      document.getElementById('divNum_53_1_29_2L2').innerHTML ="957";
      document.getElementById('divNum_55_1_29_2L1').innerHTML ="khol";
      document.getElementById('divNum_57_1_29_2L2').innerHTML ="2331";
      document.getElementById('divNum_59_1_29_2L1').innerHTML ="ha'a'rets";
      document.getElementById('divNum_61_1_29_2L2').innerHTML ="85";
      document.getElementById('divNum_63_1_29_2L1').innerHTML ="wê'et";
      document.getElementById('divNum_65_1_29_3L2').innerHTML ="957";
      document.getElementById('divNum_67_1_29_3L1').innerHTML ="kol";
      document.getElementById('divNum_69_1_29_3L2').innerHTML ="1706";
      document.getElementById('divNum_71_1_29_3L1').innerHTML ="ha'eyts";
      document.getElementById('divNum_73_1_29_3L2').innerHTML ="2589";
      document.getElementById('divNum_75_1_29_3L1').innerHTML ="a'sher";
      document.getElementById('divNum_77_1_29_3L2').innerHTML ="בוַֹ";
      document.getElementById('divNum_79_1_29_3L1').innerHTML ="PRODUCE";
      document.getElementById('divNum_81_1_29_3L2').innerHTML ="פְּרִׁי";
      document.getElementById('divNum_83_1_29_3L1').innerHTML ="TREE";
      document.getElementById('divNum_85_1_29_3L2').innerHTML ="עֵץ";
      document.getElementById('divNum_87_1_29_3L1').innerHTML ="SOW(V)";
      document.getElementById('divNum_89_1_29_3L2').innerHTML ="זֹרֵעַַ";
      document.getElementById('divNum_91_1_29_3L1').innerHTML ="SEED";
      document.getElementById('divNum_93_1_29_3L2').innerHTML ="זָּרַע";
      document.getElementById('divNum_95_1_29_3L1').innerHTML ="to~you(mp)";
      document.getElementById('divNum_97_1_29_4L2').innerHTML ="la'khem";
      document.getElementById('divNum_99_1_29_4L1').innerHTML ="505";
      document.getElementById('divNum_101_1_29_4L2').innerHTML ="yih'yeh";
      document.getElementById('divNum_103_1_29_4L1').innerHTML ="949";
      document.getElementById('divNum_105_1_29_4L2').innerHTML ="lê'akh'lah";
      document.getElementById('divNum_1_1_30_1L2').innerHTML ="and~to~ALL";
      document.getElementById('divNum_3_1_30_1L1').innerHTML ="וּלְּכָּל";
      document.getElementById('divNum_5_1_30_1L2').innerHTML ="LIVING";
      document.getElementById('divNum_7_1_30_1L1').innerHTML ="חַיַת";
      document.getElementById('divNum_9_1_30_1L2').innerHTML ="the~LAND";
      document.getElementById('divNum_11_1_30_1L1').innerHTML ="הָּאָרֶץ";
      document.getElementById('divNum_13_1_30_1L2').innerHTML ="and~to~ALL";
      document.getElementById('divNum_15_1_30_1L1').innerHTML ="וּלְּכָּל";
      document.getElementById('divNum_17_1_30_1L2').innerHTML ="FLYER";
      document.getElementById('divNum_19_1_30_1L1').innerHTML ="עוֹף";
      document.getElementById('divNum_21_1_30_1L2').innerHTML ="the~SKY";
      document.getElementById('divNum_23_1_30_1L1').innerHTML ="הַשָּמַיִׁם";
      document.getElementById('divNum_25_1_30_1L2').innerHTML ="and~to~ALL";
      document.getElementById('divNum_27_1_30_1L1').innerHTML ="וּלְּכֹל";
      document.getElementById('divNum_29_1_30_1L2').innerHTML ="TREAD(V)";
      document.getElementById('divNum_31_1_30_1L1').innerHTML ="רוֹמֵשׂ";
      document.getElementById('divNum_33_1_30_2L2').innerHTML ="UPON";
      document.getElementById('divNum_35_1_30_2L1').innerHTML ="עַל";
      document.getElementById('divNum_37_1_30_2L2').innerHTML ="the~LAND";
      document.getElementById('divNum_39_1_30_2L1').innerHTML ="הָּאָרֶץ";
      document.getElementById('divNum_41_1_30_2L2').innerHTML ="WHICH";
      document.getElementById('divNum_43_1_30_2L1').innerHTML ="אֲשֶר";
      document.getElementById('divNum_45_1_30_2L2').innerHTML ="in~him";
      document.getElementById('divNum_47_1_30_2L1').innerHTML ="bo";
      document.getElementById('divNum_49_1_30_2L2').innerHTML ="1902";
      document.getElementById('divNum_51_1_30_2L1').innerHTML ="ne'phesh";
      document.getElementById('divNum_53_1_30_2L2').innerHTML ="667";
      document.getElementById('divNum_55_1_30_2L1').innerHTML ="hhai'yah";
      document.getElementById('divNum_57_1_30_2L2').innerHTML ="85";
      document.getElementById('divNum_59_1_30_2L1').innerHTML ="et";
      document.getElementById('divNum_61_1_30_2L2').innerHTML ="957";
      document.getElementById('divNum_63_1_30_2L1').innerHTML ="kol";
      document.getElementById('divNum_65_1_30_3L2').innerHTML ="2349";
      document.getElementById('divNum_67_1_30_3L1').innerHTML ="ye'req";
      document.getElementById('divNum_69_1_30_3L2').innerHTML ="1691";
      document.getElementById('divNum_71_1_30_3L1').innerHTML ="ey'sev";
      document.getElementById('divNum_73_1_30_3L2').innerHTML ="949";
      document.getElementById('divNum_75_1_30_3L1').innerHTML ="lê'akh'lah";
      document.getElementById('divNum_77_1_30_3L2').innerHTML ="505";
      document.getElementById('divNum_79_1_30_3L1').innerHTML ="wai'hi";
      document.getElementById('divNum_81_1_30_3L2').innerHTML ="968";
      document.getElementById('divNum_83_1_30_3L1').innerHTML ="kheyn1";
      document.getElementById('divNum_1_1_31_1L2').innerHTML ="and~he~will~SEE(V)";
      document.getElementById('divNum_3_1_31_1L1').innerHTML ="וַיַרְּא";
      document.getElementById('divNum_5_1_31_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_7_1_31_1L1').innerHTML ="אֱלֹהִׁים";
      document.getElementById('divNum_9_1_31_1L2').innerHTML ="AT";
      document.getElementById('divNum_11_1_31_1L1').innerHTML ="אֶת";
      document.getElementById('divNum_13_1_31_1L2').innerHTML ="ALL";
      document.getElementById('divNum_15_1_31_1L1').innerHTML ="כָּל";
      document.getElementById('divNum_17_1_31_1L2').innerHTML ="WHICH";
      document.getElementById('divNum_19_1_31_1L1').innerHTML ="אֲשֶר";
      document.getElementById('divNum_21_1_31_1L2').innerHTML ="he~did~DO(V)";
      document.getElementById('divNum_23_1_31_1L1').innerHTML ="עָּשָּׂה";
      document.getElementById('divNum_25_1_31_1L2').innerHTML ="and~LOOK";
      document.getElementById('divNum_27_1_31_1L1').innerHTML ="וְּהִׁנֵה";
      document.getElementById('divNum_29_1_31_1L2').innerHTML ="FUNCTIONAL";
      document.getElementById('divNum_31_1_31_1L1').innerHTML ="טוֹב";
      document.getElementById('divNum_33_1_31_2L2').innerHTML ="MANY";
      document.getElementById('divNum_35_1_31_2L1').innerHTML ="מְּאֹד";
      document.getElementById('divNum_37_1_31_2L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_39_1_31_2L1').innerHTML ="וַיְּהִׁי";
      document.getElementById('divNum_41_1_31_2L2').innerHTML ="EVENING";
      document.getElementById('divNum_43_1_31_2L1').innerHTML ="עֶרֶב";
      document.getElementById('divNum_45_1_31_2L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_47_1_31_2L1').innerHTML ="וַיְּהִׁי";
      document.getElementById('divNum_49_1_31_2L2').innerHTML ="MORNING";
      document.getElementById('divNum_51_1_31_2L1').innerHTML ="בֹקֶר";
      document.getElementById('divNum_53_1_31_2L2').innerHTML ="DAY";
      document.getElementById('divNum_55_1_31_2L1').innerHTML ="יוֹם";
      document.getElementById('divNum_57_1_31_2L2').innerHTML ="the~SIXTH";
      document.getElementById('divNum_59_1_31_2L1').innerHTML ="הַשִׁשִׁי";
	return false;}
	//Change all text to Transliteration and English
  if( idElement == 2){
      document.getElementById('divNum_0_1_1_1L1').innerHTML ="1:1";
      document.getElementById('divNum_1_1_1_1L2').innerHTML ="in~SUMMIT";
      document.getElementById('divNum_4_1_1_1L1').innerHTML ="bê'rey'shit";
      document.getElementById('divNum_5_1_1_1L2').innerHTML ="he~did~FATTEN(V)";
      document.getElementById('divNum_8_1_1_1L1').innerHTML ="ba'ra";
      document.getElementById('divNum_9_1_1_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_12_1_1_1L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_13_1_1_1L2').innerHTML ="AT";
      document.getElementById('divNum_16_1_1_1L1').innerHTML ="eyt";
      document.getElementById('divNum_17_1_1_1L2').innerHTML ="the~SKY";
      document.getElementById('divNum_20_1_1_1L1').innerHTML ="ha'sha'ma'yim";
      document.getElementById('divNum_21_1_1_1L2').innerHTML ="and~AT";
      document.getElementById('divNum_24_1_1_1L1').innerHTML ="wê'eyt";
      document.getElementById('divNum_25_1_1_1L2').innerHTML ="the~LAND";
      document.getElementById('divNum_28_1_1_1L1').innerHTML ="ha'a'rets";
      document.getElementById('divNum_0_1_2_1L1').innerHTML ="1:2";
      document.getElementById('divNum_1_1_2_1L2').innerHTML ="and~the~LAND";
      document.getElementById('divNum_4_1_2_1L1').innerHTML ="wê'ha'a'rets";
      document.getElementById('divNum_5_1_2_1L2').innerHTML ="she~did~EXIST(V)";
      document.getElementById('divNum_8_1_2_1L1').innerHTML ="hai'tah";
      document.getElementById('divNum_9_1_2_1L2').innerHTML ="CONFUSION";
      document.getElementById('divNum_12_1_2_1L1').innerHTML ="to'hu";
      document.getElementById('divNum_13_1_2_1L2').innerHTML ="and~UNFILLED";
      document.getElementById('divNum_16_1_2_1L1').innerHTML ="wa'vo'hu";
      document.getElementById('divNum_17_1_2_1L2').innerHTML ="and~DARKNESS";
      document.getElementById('divNum_20_1_2_1L1').innerHTML ="wê'hho'shekh";
      document.getElementById('divNum_21_1_2_1L2').innerHTML ="UPON";
      document.getElementById('divNum_24_1_2_1L1').innerHTML ="al";
      document.getElementById('divNum_25_1_2_1L2').innerHTML ="FACE";
      document.getElementById('divNum_28_1_2_1L1').innerHTML ="pê'ney";
      document.getElementById('divNum_29_1_2_1L2').innerHTML ="DEEP.SEA";
      document.getElementById('divNum_32_1_2_2L1').innerHTML ="tê'hom";
      document.getElementById('divNum_33_1_2_2L2').innerHTML ="and~WIND";
      document.getElementById('divNum_36_1_2_2L1').innerHTML ="wê'ru'ahh";
      document.getElementById('divNum_37_1_2_2L2').innerHTML ="Elohiym";
      document.getElementById('divNum_40_1_2_2L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_41_1_2_2L2').innerHTML ="much~FLUTTER(V)";
      document.getElementById('divNum_44_1_2_2L1').innerHTML ="mê'ra'hhe'phet";
      document.getElementById('divNum_45_1_2_2L2').innerHTML ="UPON";
      document.getElementById('divNum_48_1_2_2L1').innerHTML ="al";
      document.getElementById('divNum_49_1_2_2L2').innerHTML ="FACE";
      document.getElementById('divNum_52_1_2_2L1').innerHTML ="pê'ney";
      document.getElementById('divNum_53_1_2_2L2').innerHTML ="the~WATER";
      document.getElementById('divNum_56_1_2_2L1').innerHTML ="ha'ma'yim";
      document.getElementById('divNum_0_1_3_1L1').innerHTML ="1:3";
      document.getElementById('divNum_1_1_3_1L2').innerHTML ="and~he~will~SAY(V)";
      document.getElementById('divNum_4_1_3_1L1').innerHTML ="wai'yo'mer";
      document.getElementById('divNum_5_1_3_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_8_1_3_1L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_9_1_3_1L2').innerHTML ="he~will~EXIST(V)";
      document.getElementById('divNum_12_1_3_1L1').innerHTML ="yê'hi";
      document.getElementById('divNum_13_1_3_1L2').innerHTML ="LIGHT";
      document.getElementById('divNum_16_1_3_1L1').innerHTML ="or";
      document.getElementById('divNum_17_1_3_1L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_20_1_3_1L1').innerHTML ="wai'hi";
      document.getElementById('divNum_21_1_3_1L2').innerHTML ="LIGHT";
      document.getElementById('divNum_24_1_3_1L1').innerHTML ="or";
      document.getElementById('divNum_0_1_4_1L1').innerHTML ="1:4";
      document.getElementById('divNum_1_1_4_1L2').innerHTML ="and~he~will~SEE(V)";
      document.getElementById('divNum_4_1_4_1L1').innerHTML ="wai'yar";
      document.getElementById('divNum_5_1_4_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_8_1_4_1L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_9_1_4_1L2').innerHTML ="AT";
      document.getElementById('divNum_12_1_4_1L1').innerHTML ="et";
      document.getElementById('divNum_13_1_4_1L2').innerHTML ="the~LIGHT";
      document.getElementById('divNum_16_1_4_1L1').innerHTML ="ha'or";
      document.getElementById('divNum_17_1_4_1L2').innerHTML ="GIVEN.THAT";
      document.getElementById('divNum_20_1_4_1L1').innerHTML ="ki";
      document.getElementById('divNum_21_1_4_1L2').innerHTML ="FUNCTIONAL";
      document.getElementById('divNum_24_1_4_1L1').innerHTML ="tov";
      document.getElementById('divNum_25_1_4_1L2').innerHTML ="and~he~will~make~SEPARATE(V)";
      document.getElementById('divNum_28_1_4_1L1').innerHTML ="wai'yav'deyl";
      document.getElementById('divNum_29_1_4_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_32_1_4_2L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_33_1_4_2L2').innerHTML ="BETWEEN";
      document.getElementById('divNum_36_1_4_2L1').innerHTML ="beyn";
      document.getElementById('divNum_37_1_4_2L2').innerHTML ="the~LIGHT";
      document.getElementById('divNum_40_1_4_2L1').innerHTML ="ha'or";
      document.getElementById('divNum_41_1_4_2L2').innerHTML ="and~BETWEEN";
      document.getElementById('divNum_44_1_4_2L1').innerHTML ="u'veyn";
      document.getElementById('divNum_45_1_4_2L2').innerHTML ="the~DARKNESS";
      document.getElementById('divNum_48_1_4_2L1').innerHTML ="ha'hho'shekh";
      document.getElementById('divNum_0_1_5_1L1').innerHTML ="1:5";
      document.getElementById('divNum_1_1_5_1L2').innerHTML ="and~he~will~CALL.OUT(V)";
      document.getElementById('divNum_4_1_5_1L1').innerHTML ="wai'yiq'ra";
      document.getElementById('divNum_5_1_5_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_8_1_5_1L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_9_1_5_1L2').innerHTML ="to~LIGHT";
      document.getElementById('divNum_12_1_5_1L1').innerHTML ="la'or";
      document.getElementById('divNum_13_1_5_1L2').innerHTML ="DAY";
      document.getElementById('divNum_16_1_5_1L1').innerHTML ="yom";
      document.getElementById('divNum_17_1_5_1L2').innerHTML ="and~to~DARKNESS";
      document.getElementById('divNum_20_1_5_1L1').innerHTML ="wê'la'hho'shekh";
      document.getElementById('divNum_21_1_5_1L2').innerHTML ="he~did~CALL.OUT(V)";
      document.getElementById('divNum_24_1_5_1L1').innerHTML ="qa'ra";
      document.getElementById('divNum_25_1_5_1L2').innerHTML ="NIGHT";
      document.getElementById('divNum_28_1_5_1L1').innerHTML ="lai'lah";
      document.getElementById('divNum_29_1_5_1L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_32_1_5_2L1').innerHTML ="wai'hi";
      document.getElementById('divNum_33_1_5_2L2').innerHTML ="EVENING";
      document.getElementById('divNum_36_1_5_2L1').innerHTML ="e'rev";
      document.getElementById('divNum_37_1_5_2L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_40_1_5_2L1').innerHTML ="wai'hi";
      document.getElementById('divNum_41_1_5_2L2').innerHTML ="MORNING";
      document.getElementById('divNum_44_1_5_2L1').innerHTML ="vo'qer";
      document.getElementById('divNum_45_1_5_2L2').innerHTML ="DAY";
      document.getElementById('divNum_48_1_5_2L1').innerHTML ="yom";
      document.getElementById('divNum_49_1_5_2L2').innerHTML ="UNIT";
      document.getElementById('divNum_52_1_5_2L1').innerHTML ="e'hhad";
      document.getElementById('divNum_0_1_6_1L1').innerHTML ="1:6";
      document.getElementById('divNum_1_1_6_1L2').innerHTML ="and~he~will~SAY(V)";
      document.getElementById('divNum_4_1_6_1L1').innerHTML ="wai'yo'mer";
      document.getElementById('divNum_5_1_6_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_8_1_6_1L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_9_1_6_1L2').innerHTML ="he~will~EXIST(V)";
      document.getElementById('divNum_12_1_6_1L1').innerHTML ="yê'hi";
      document.getElementById('divNum_13_1_6_1L2').innerHTML ="SHEET";
      document.getElementById('divNum_16_1_6_1L1').innerHTML ="ra'qi'a";
      document.getElementById('divNum_17_1_6_1L2').innerHTML ="in~MIDST";
      document.getElementById('divNum_20_1_6_1L1').innerHTML ="bê'tokh";
      document.getElementById('divNum_21_1_6_1L2').innerHTML ="the~WATER";
      document.getElementById('divNum_24_1_6_1L1').innerHTML ="ha'ma'yim";
      document.getElementById('divNum_25_1_6_1L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_28_1_6_1L1').innerHTML ="wi'hi";
      document.getElementById('divNum_29_1_6_1L2').innerHTML ="make~SEPARATE(V)";
      document.getElementById('divNum_32_1_6_2L1').innerHTML ="mav'dil";
      document.getElementById('divNum_33_1_6_2L2').innerHTML ="BETWEEN";
      document.getElementById('divNum_36_1_6_2L1').innerHTML ="beyn";
      document.getElementById('divNum_37_1_6_2L2').innerHTML ="WATER";
      document.getElementById('divNum_40_1_6_2L1').innerHTML ="ma'yim";
      document.getElementById('divNum_41_1_6_2L2').innerHTML ="to~WATER";
      document.getElementById('divNum_44_1_6_2L1').innerHTML ="la'ma'yim";
      document.getElementById('divNum_0_1_7_1L1').innerHTML ="1:7";
      document.getElementById('divNum_1_1_7_1L2').innerHTML ="and~he~will~DO(V)";
      document.getElementById('divNum_4_1_7_1L1').innerHTML ="wai'ya'as";
      document.getElementById('divNum_5_1_7_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_8_1_7_1L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_9_1_7_1L2').innerHTML ="AT";
      document.getElementById('divNum_12_1_7_1L1').innerHTML ="et";
      document.getElementById('divNum_13_1_7_1L2').innerHTML ="the~SHEET";
      document.getElementById('divNum_16_1_7_1L1').innerHTML ="ha'ra'qi'a";
      document.getElementById('divNum_17_1_7_1L2').innerHTML ="and~he~will~make~SEPARATE(V)";
      document.getElementById('divNum_20_1_7_1L1').innerHTML ="wai'yav'deyl";
      document.getElementById('divNum_21_1_7_1L2').innerHTML ="BETWEEN";
      document.getElementById('divNum_24_1_7_1L1').innerHTML ="beyn";
      document.getElementById('divNum_25_1_7_1L2').innerHTML ="the~WATER";
      document.getElementById('divNum_28_1_7_1L1').innerHTML ="ha'ma'yim";
      document.getElementById('divNum_29_1_7_1L2').innerHTML ="WHICH";
      document.getElementById('divNum_32_1_7_2L1').innerHTML ="a'sher";
      document.getElementById('divNum_33_1_7_2L2').innerHTML ="from~UNDER";
      document.getElementById('divNum_36_1_7_2L1').innerHTML ="mi'ta'hhat";
      document.getElementById('divNum_37_1_7_2L2').innerHTML ="to~SHEET";
      document.getElementById('divNum_40_1_7_2L1').innerHTML ="la'ra'qi'a";
      document.getElementById('divNum_41_1_7_2L2').innerHTML ="and~BETWEEN";
      document.getElementById('divNum_44_1_7_2L1').innerHTML ="u'veyn";
      document.getElementById('divNum_45_1_7_2L2').innerHTML ="the~WATER";
      document.getElementById('divNum_48_1_7_2L1').innerHTML ="ha'ma'yim";
      document.getElementById('divNum_49_1_7_2L2').innerHTML ="WHICH";
      document.getElementById('divNum_52_1_7_2L1').innerHTML ="a'sher";
      document.getElementById('divNum_53_1_7_2L2').innerHTML ="from~UPON";
      document.getElementById('divNum_56_1_7_2L1').innerHTML ="mey'al";
      document.getElementById('divNum_57_1_7_2L2').innerHTML ="to~SHEET";
      document.getElementById('divNum_60_1_7_2L1').innerHTML ="la'ra'qi'a";
      document.getElementById('divNum_61_1_7_2L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_64_1_7_3L1').innerHTML ="wai'hi";
      document.getElementById('divNum_65_1_7_3L2').innerHTML ="SO";
      document.getElementById('divNum_68_1_7_3L1').innerHTML ="kheyn2";
      document.getElementById('divNum_0_1_8_1L1').innerHTML ="1:8";
      document.getElementById('divNum_1_1_8_1L2').innerHTML ="and~he~will~CALL.OUT(V)";
      document.getElementById('divNum_4_1_8_1L1').innerHTML ="wai'yiq'ra";
      document.getElementById('divNum_5_1_8_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_8_1_8_1L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_9_1_8_1L2').innerHTML ="to~SHEET";
      document.getElementById('divNum_12_1_8_1L1').innerHTML ="la'ra'qi'a";
      document.getElementById('divNum_13_1_8_1L2').innerHTML ="SKY";
      document.getElementById('divNum_16_1_8_1L1').innerHTML ="sha'ma'yim";
      document.getElementById('divNum_17_1_8_1L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_20_1_8_1L1').innerHTML ="wai'hi";
      document.getElementById('divNum_21_1_8_1L2').innerHTML ="EVENING";
      document.getElementById('divNum_24_1_8_1L1').innerHTML ="e'rev";
      document.getElementById('divNum_25_1_8_1L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_28_1_8_1L1').innerHTML ="wai'hi";
      document.getElementById('divNum_29_1_8_1L2').innerHTML ="MORNING";
      document.getElementById('divNum_32_1_8_2L1').innerHTML ="vo'qer";
      document.getElementById('divNum_33_1_8_2L2').innerHTML ="DAY";
      document.getElementById('divNum_36_1_8_2L1').innerHTML ="yom";
      document.getElementById('divNum_37_1_8_2L2').innerHTML ="SECOND";
      document.getElementById('divNum_40_1_8_2L1').innerHTML ="shey'ni";
      document.getElementById('divNum_0_1_9_1L1').innerHTML ="1:9";
      document.getElementById('divNum_1_1_9_1L2').innerHTML ="and~he~will~SAY(V)";
      document.getElementById('divNum_4_1_9_1L1').innerHTML ="wai'yo'mer";
      document.getElementById('divNum_5_1_9_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_8_1_9_1L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_9_1_9_1L2').innerHTML ="he~will~be~BOUND.UP(V)";
      document.getElementById('divNum_12_1_9_1L1').innerHTML ="yi'qaw'u";
      document.getElementById('divNum_13_1_9_1L2').innerHTML ="the~WATER";
      document.getElementById('divNum_16_1_9_1L1').innerHTML ="ha'ma'yim";
      document.getElementById('divNum_17_1_9_1L2').innerHTML ="from~UNDER";
      document.getElementById('divNum_20_1_9_1L1').innerHTML ="mi'ta'hhat";
      document.getElementById('divNum_21_1_9_1L2').innerHTML ="the~SKY";
      document.getElementById('divNum_24_1_9_1L1').innerHTML ="ha'sha'ma'yim";
      document.getElementById('divNum_25_1_9_1L2').innerHTML ="TO";
      document.getElementById('divNum_28_1_9_1L1').innerHTML ="el";
      document.getElementById('divNum_29_1_9_1L2').innerHTML ="AREA";
      document.getElementById('divNum_32_1_9_2L1').innerHTML ="ma'qom";
      document.getElementById('divNum_33_1_9_2L2').innerHTML ="UNIT";
      document.getElementById('divNum_36_1_9_2L1').innerHTML ="e'hhad";
      document.getElementById('divNum_37_1_9_2L2').innerHTML ="and~she~be~SEE(V)";
      document.getElementById('divNum_40_1_9_2L1').innerHTML ="wê'tey'ra'eh";
      document.getElementById('divNum_41_1_9_2L2').innerHTML ="the~DRY.GROUND";
      document.getElementById('divNum_44_1_9_2L1').innerHTML ="hai'ya'ba'shah";
      document.getElementById('divNum_45_1_9_2L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_48_1_9_2L1').innerHTML ="wai'hi";
      document.getElementById('divNum_49_1_9_2L2').innerHTML ="SO";
      document.getElementById('divNum_52_1_9_2L1').innerHTML ="kheyn3";
      document.getElementById('divNum_0_1_10_1L1').innerHTML ="1:10";
      document.getElementById('divNum_1_1_10_1L2').innerHTML ="and~he~will~CALL.OUT(V)";
      document.getElementById('divNum_4_1_10_1L1').innerHTML ="wai'yiq'ra";
      document.getElementById('divNum_5_1_10_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_8_1_10_1L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_9_1_10_1L2').innerHTML ="to~DRY.GROUND";
      document.getElementById('divNum_12_1_10_1L1').innerHTML ="lai'ya'ba'shah";
      document.getElementById('divNum_13_1_10_1L2').innerHTML ="LAND";
      document.getElementById('divNum_16_1_10_1L1').innerHTML ="e'rets";
      document.getElementById('divNum_17_1_10_1L2').innerHTML ="and~to~COLLECTION";
      document.getElementById('divNum_20_1_10_1L1').innerHTML ="ul'miq'weh";
      document.getElementById('divNum_21_1_10_1L2').innerHTML ="the~WATER";
      document.getElementById('divNum_24_1_10_1L1').innerHTML ="ha'ma'yim";
      document.getElementById('divNum_25_1_10_1L2').innerHTML ="he~did~CALL.OUT(V)";
      document.getElementById('divNum_28_1_10_1L1').innerHTML ="qa'ra";
      document.getElementById('divNum_29_1_10_1L2').innerHTML ="SEA";
      document.getElementById('divNum_32_1_10_2L1').innerHTML ="ya'mim";
      document.getElementById('divNum_33_1_10_2L2').innerHTML ="and~he~will~SEE(V)";
      document.getElementById('divNum_36_1_10_2L1').innerHTML ="wai'yar";
      document.getElementById('divNum_37_1_10_2L2').innerHTML ="Elohiym";
      document.getElementById('divNum_40_1_10_2L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_41_1_10_2L2').innerHTML ="GIVEN.THAT";
      document.getElementById('divNum_44_1_10_2L1').innerHTML ="ki";
      document.getElementById('divNum_45_1_10_2L2').innerHTML ="FUNCTIONAL";
      document.getElementById('divNum_48_1_10_2L1').innerHTML ="tov";
      document.getElementById('divNum_0_1_11_1L1').innerHTML ="1:11";
      document.getElementById('divNum_1_1_11_1L2').innerHTML ="and~he~will~SAY(V)";
      document.getElementById('divNum_4_1_11_1L1').innerHTML ="wai'yo'mer";
      document.getElementById('divNum_5_1_11_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_8_1_11_1L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_9_1_11_1L2').innerHTML ="she~will~make~SPROUT(V)";
      document.getElementById('divNum_12_1_11_1L1').innerHTML ="tad'shey";
      document.getElementById('divNum_13_1_11_1L2').innerHTML ="the~LAND";
      document.getElementById('divNum_16_1_11_1L1').innerHTML ="ha'a'rets";
      document.getElementById('divNum_17_1_11_1L2').innerHTML ="GRASS";
      document.getElementById('divNum_20_1_11_1L1').innerHTML ="de'she";
      document.getElementById('divNum_21_1_11_1L2').innerHTML ="HERB";
      document.getElementById('divNum_24_1_11_1L1').innerHTML ="ey'sev";
      document.getElementById('divNum_25_1_11_1L2').innerHTML ="make~SOW(V)";
      document.getElementById('divNum_28_1_11_1L1').innerHTML ="maz'ri'a";
      document.getElementById('divNum_29_1_11_1L2').innerHTML ="SEED";
      document.getElementById('divNum_32_1_11_2L1').innerHTML ="ze'ra";
      document.getElementById('divNum_33_1_11_2L2').innerHTML ="TREE";
      document.getElementById('divNum_36_1_11_2L1').innerHTML ="eyts";
      document.getElementById('divNum_37_1_11_2L2').innerHTML ="PRODUCE";
      document.getElementById('divNum_40_1_11_2L1').innerHTML ="pê'ri";
      document.getElementById('divNum_41_1_11_2L2').innerHTML ="DO(V)";
      document.getElementById('divNum_44_1_11_2L1').innerHTML ="o'seh";
      document.getElementById('divNum_45_1_11_2L2').innerHTML ="PRODUCE";
      document.getElementById('divNum_48_1_11_2L1').innerHTML ="pê'ri";
      document.getElementById('divNum_49_1_11_2L2').innerHTML ="to~KIND";
      document.getElementById('divNum_52_1_11_2L1').innerHTML ="lê'mi'no";
      document.getElementById('divNum_53_1_11_2L2').innerHTML ="WHICH";
      document.getElementById('divNum_56_1_11_2L1').innerHTML ="a'sher";
      document.getElementById('divNum_57_1_11_2L2').innerHTML ="SEED";
      document.getElementById('divNum_60_1_11_2L1').innerHTML ="zar'o";
      document.getElementById('divNum_61_1_11_2L2').innerHTML ="in~him";
      document.getElementById('divNum_64_1_11_3L1').innerHTML ="UPON";
      document.getElementById('divNum_65_1_11_3L2').innerHTML ="1616";
      document.getElementById('divNum_68_1_11_3L1').innerHTML ="the~LAND";
      document.getElementById('divNum_69_1_11_3L2').innerHTML ="2331";
      document.getElementById('divNum_72_1_11_3L1').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_73_1_11_3L2').innerHTML ="505";
      document.getElementById('divNum_76_1_11_3L1').innerHTML ="SO";
      document.getElementById('divNum_77_1_11_3L2').innerHTML ="968";
      document.getElementById('divNum_0_1_12_1L1').innerHTML ="1:12";
      document.getElementById('divNum_1_1_12_1L2').innerHTML ="and~she~will~make~GO.OUT(V)";
      document.getElementById('divNum_4_1_12_1L1').innerHTML ="wa'to'tsey";
      document.getElementById('divNum_5_1_12_1L2').innerHTML ="the~LAND";
      document.getElementById('divNum_8_1_12_1L1').innerHTML ="ha'a'rets";
      document.getElementById('divNum_9_1_12_1L2').innerHTML ="GRASS";
      document.getElementById('divNum_12_1_12_1L1').innerHTML ="de'she";
      document.getElementById('divNum_13_1_12_1L2').innerHTML ="HERB";
      document.getElementById('divNum_16_1_12_1L1').innerHTML ="ey'sev";
      document.getElementById('divNum_17_1_12_1L2').innerHTML ="make~SOW(V)";
      document.getElementById('divNum_20_1_12_1L1').innerHTML ="maz'ri'a";
      document.getElementById('divNum_21_1_12_1L2').innerHTML ="SEED";
      document.getElementById('divNum_24_1_12_1L1').innerHTML ="ze'ra";
      document.getElementById('divNum_25_1_12_1L2').innerHTML ="to~KIND";
      document.getElementById('divNum_28_1_12_1L1').innerHTML ="lê'mi'ney'hu";
      document.getElementById('divNum_29_1_12_1L2').innerHTML ="and~TREE";
      document.getElementById('divNum_32_1_12_2L1').innerHTML ="wê'eyts";
      document.getElementById('divNum_33_1_12_2L2').innerHTML ="DO(V)";
      document.getElementById('divNum_36_1_12_2L1').innerHTML ="o'seh";
      document.getElementById('divNum_37_1_12_2L2').innerHTML ="PRODUCE";
      document.getElementById('divNum_40_1_12_2L1').innerHTML ="pê'ri";
      document.getElementById('divNum_41_1_12_2L2').innerHTML ="WHICH";
      document.getElementById('divNum_44_1_12_2L1').innerHTML ="a'sher";
      document.getElementById('divNum_45_1_12_2L2').innerHTML ="SEED";
      document.getElementById('divNum_48_1_12_2L1').innerHTML ="zar'o";
      document.getElementById('divNum_49_1_12_2L2').innerHTML ="in~him";
      document.getElementById('divNum_52_1_12_2L1').innerHTML ="to~KIND";
      document.getElementById('divNum_53_1_12_2L2').innerHTML ="1216~him";
      document.getElementById('divNum_56_1_12_2L1').innerHTML ="and~he~will~SEE(V)";
      document.getElementById('divNum_57_1_12_2L2').innerHTML ="2185";
      document.getElementById('divNum_60_1_12_2L1').innerHTML ="Elohiym";
      document.getElementById('divNum_61_1_12_2L2').innerHTML ="POWER~s";
      document.getElementById('divNum_64_1_12_3L1').innerHTML ="GIVEN.THAT";
      document.getElementById('divNum_65_1_12_3L2').innerHTML ="940";
      document.getElementById('divNum_68_1_12_3L1').innerHTML ="FUNCTIONAL";
      document.getElementById('divNum_69_1_12_3L2').innerHTML ="848";
      document.getElementById('divNum_0_1_13_1L1').innerHTML ="1:13";
      document.getElementById('divNum_1_1_13_1L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_4_1_13_1L1').innerHTML ="wai'hi";
      document.getElementById('divNum_5_1_13_1L2').innerHTML ="EVENING";
      document.getElementById('divNum_8_1_13_1L1').innerHTML ="e'rev";
      document.getElementById('divNum_9_1_13_1L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_12_1_13_1L1').innerHTML ="wai'hi";
      document.getElementById('divNum_13_1_13_1L2').innerHTML ="MORNING";
      document.getElementById('divNum_16_1_13_1L1').innerHTML ="vo'qer";
      document.getElementById('divNum_17_1_13_1L2').innerHTML ="DAY";
      document.getElementById('divNum_20_1_13_1L1').innerHTML ="yom";
      document.getElementById('divNum_21_1_13_1L2').innerHTML ="THIRD";
      document.getElementById('divNum_24_1_13_1L1').innerHTML ="shê'li'shi2";
      document.getElementById('divNum_0_1_14_1L1').innerHTML ="1:14";
      document.getElementById('divNum_1_1_14_1L2').innerHTML ="and~he~will~SAY(V)";
      document.getElementById('divNum_4_1_14_1L1').innerHTML ="wai'yo'mer";
      document.getElementById('divNum_5_1_14_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_8_1_14_1L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_9_1_14_1L2').innerHTML ="he~will~EXIST(V)";
      document.getElementById('divNum_12_1_14_1L1').innerHTML ="yê'hi";
      document.getElementById('divNum_13_1_14_1L2').innerHTML ="LUMINARY";
      document.getElementById('divNum_16_1_14_1L1').innerHTML ="mê'o'rot";
      document.getElementById('divNum_17_1_14_1L2').innerHTML ="in~SHEET";
      document.getElementById('divNum_20_1_14_1L1').innerHTML ="bir'qi'a";
      document.getElementById('divNum_21_1_14_1L2').innerHTML ="the~SKY";
      document.getElementById('divNum_24_1_14_1L1').innerHTML ="ha'sha'ma'yim";
      document.getElementById('divNum_25_1_14_1L2').innerHTML ="to~>~make~SEPARATE(V)";
      document.getElementById('divNum_28_1_14_1L1').innerHTML ="lê'hav'dil";
      document.getElementById('divNum_29_1_14_1L2').innerHTML ="BETWEEN";
      document.getElementById('divNum_32_1_14_2L1').innerHTML ="beyn";
      document.getElementById('divNum_33_1_14_2L2').innerHTML ="the~DAY";
      document.getElementById('divNum_36_1_14_2L1').innerHTML ="hai'yom";
      document.getElementById('divNum_37_1_14_2L2').innerHTML ="and~BETWEEN";
      document.getElementById('divNum_40_1_14_2L1').innerHTML ="u'veyn";
      document.getElementById('divNum_41_1_14_2L2').innerHTML ="the~NIGHT";
      document.getElementById('divNum_44_1_14_2L1').innerHTML ="ha'lai'lah";
      document.getElementById('divNum_45_1_14_2L2').innerHTML ="and~they(cp)~did~EXIST(V)";
      document.getElementById('divNum_48_1_14_2L1').innerHTML ="wê'hai'u";
      document.getElementById('divNum_49_1_14_2L2').innerHTML ="to~SIGN";
      document.getElementById('divNum_52_1_14_2L1').innerHTML ="lê'o'tot";
      document.getElementById('divNum_53_1_14_2L2').innerHTML ="and~to~APPOINTED";
      document.getElementById('divNum_56_1_14_2L1').innerHTML ="ul'mo'a'dim";
      document.getElementById('divNum_57_1_14_2L2').innerHTML ="and~to~DAY";
      document.getElementById('divNum_60_1_14_2L1').innerHTML ="ul'ya'mim";
      document.getElementById('divNum_61_1_14_2L2').innerHTML ="and~YEAR";
      document.getElementById('divNum_64_1_14_3L1').innerHTML ="wê'sha'nim";
      document.getElementById('divNum_0_1_15_1L1').innerHTML ="1:15";
      document.getElementById('divNum_1_1_15_1L2').innerHTML ="and~they(cp)~did~EXIST(V)";
      document.getElementById('divNum_4_1_15_1L1').innerHTML ="wê'hai'u";
      document.getElementById('divNum_5_1_15_1L2').innerHTML ="to~LUMINARY";
      document.getElementById('divNum_8_1_15_1L1').innerHTML ="lim'o'rot";
      document.getElementById('divNum_9_1_15_1L2').innerHTML ="in~SHEET";
      document.getElementById('divNum_12_1_15_1L1').innerHTML ="bir'qi'a";
      document.getElementById('divNum_13_1_15_1L2').innerHTML ="the~SKY";
      document.getElementById('divNum_16_1_15_1L1').innerHTML ="ha'sha'ma'yim";
      document.getElementById('divNum_17_1_15_1L2').innerHTML ="to~>~make~LIGHT(V)";
      document.getElementById('divNum_20_1_15_1L1').innerHTML ="lê'ha'ir";
      document.getElementById('divNum_21_1_15_1L2').innerHTML ="UPON";
      document.getElementById('divNum_24_1_15_1L1').innerHTML ="al";
      document.getElementById('divNum_25_1_15_1L2').innerHTML ="the~LAND";
      document.getElementById('divNum_28_1_15_1L1').innerHTML ="ha'a'rets";
      document.getElementById('divNum_29_1_15_1L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_32_1_15_2L1').innerHTML ="wai'hi";
      document.getElementById('divNum_33_1_15_2L2').innerHTML ="SO";
      document.getElementById('divNum_36_1_15_2L1').innerHTML ="kheyn3";
      document.getElementById('divNum_0_1_16_1L1').innerHTML ="1:16";
      document.getElementById('divNum_1_1_16_1L2').innerHTML ="and~he~will~DO(V)";
      document.getElementById('divNum_4_1_16_1L1').innerHTML ="wai'ya'as";
      document.getElementById('divNum_5_1_16_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_8_1_16_1L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_9_1_16_1L2').innerHTML ="AT";
      document.getElementById('divNum_12_1_16_1L1').innerHTML ="et";
      document.getElementById('divNum_13_1_16_1L2').innerHTML ="TWO";
      document.getElementById('divNum_16_1_16_1L1').innerHTML ="shê'ney";
      document.getElementById('divNum_17_1_16_1L2').innerHTML ="the~LUMINARY";
      document.getElementById('divNum_20_1_16_1L1').innerHTML ="ham'o'rot";
      document.getElementById('divNum_21_1_16_1L2').innerHTML ="the~GREAT";
      document.getElementById('divNum_24_1_16_1L1').innerHTML ="ha'ge'do'lim";
      document.getElementById('divNum_25_1_16_1L2').innerHTML ="AT";
      document.getElementById('divNum_28_1_16_1L1').innerHTML ="et";
      document.getElementById('divNum_29_1_16_1L2').innerHTML ="the~LUMINARY";
      document.getElementById('divNum_32_1_16_2L1').innerHTML ="ha'ma'or";
      document.getElementById('divNum_33_1_16_2L2').innerHTML ="the~GREAT";
      document.getElementById('divNum_36_1_16_2L1').innerHTML ="ha'ga'dol";
      document.getElementById('divNum_37_1_16_2L2').innerHTML ="to~REGULATION";
      document.getElementById('divNum_40_1_16_2L1').innerHTML ="lê'mem'she'let";
      document.getElementById('divNum_41_1_16_2L2').innerHTML ="the~DAY";
      document.getElementById('divNum_44_1_16_2L1').innerHTML ="hai'yom";
      document.getElementById('divNum_45_1_16_2L2').innerHTML ="and~AT";
      document.getElementById('divNum_48_1_16_2L1').innerHTML ="wê'et";
      document.getElementById('divNum_49_1_16_2L2').innerHTML ="the~LUMINARY";
      document.getElementById('divNum_52_1_16_2L1').innerHTML ="ha'ma'or";
      document.getElementById('divNum_53_1_16_2L2').innerHTML ="the~SMALL";
      document.getElementById('divNum_56_1_16_2L1').innerHTML ="ha'qa'ton";
      document.getElementById('divNum_57_1_16_2L2').innerHTML ="to~REGULATION";
      document.getElementById('divNum_60_1_16_2L1').innerHTML ="lê'mem'she'let";
      document.getElementById('divNum_61_1_16_2L2').innerHTML ="the~NIGHT";
      document.getElementById('divNum_64_1_16_3L1').innerHTML ="ha'lai'lah";
      document.getElementById('divNum_65_1_16_3L2').innerHTML ="and~AT";
      document.getElementById('divNum_68_1_16_3L1').innerHTML ="wê'eyt";
      document.getElementById('divNum_69_1_16_3L2').innerHTML ="the~STAR";
      document.getElementById('divNum_72_1_16_3L1').innerHTML ="ha'ko'kha'vim4";
      document.getElementById('divNum_0_1_17_1L1').innerHTML ="1:17";
      document.getElementById('divNum_1_1_17_1L2').innerHTML ="and~he~will~GIVE(V)";
      document.getElementById('divNum_4_1_17_1L1').innerHTML ="wai'yi'teyn";
      document.getElementById('divNum_5_1_17_1L2').innerHTML ="AT";
      document.getElementById('divNum_8_1_17_1L1').innerHTML ="o'tam";
      document.getElementById('divNum_9_1_17_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_12_1_17_1L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_13_1_17_1L2').innerHTML ="in~SHEET";
      document.getElementById('divNum_16_1_17_1L1').innerHTML ="bir'qi'a";
      document.getElementById('divNum_17_1_17_1L2').innerHTML ="the~SKY";
      document.getElementById('divNum_20_1_17_1L1').innerHTML ="ha'sha'ma'yim";
      document.getElementById('divNum_21_1_17_1L2').innerHTML ="to~>~make~LIGHT(V)";
      document.getElementById('divNum_24_1_17_1L1').innerHTML ="lê'ha'ir";
      document.getElementById('divNum_25_1_17_1L2').innerHTML ="UPON";
      document.getElementById('divNum_28_1_17_1L1').innerHTML ="al";
      document.getElementById('divNum_29_1_17_1L2').innerHTML ="the~LAND";
      document.getElementById('divNum_32_1_17_2L1').innerHTML ="ha'a'rets";
      document.getElementById('divNum_0_1_18_1L1').innerHTML ="1:18";
      document.getElementById('divNum_1_1_18_1L2').innerHTML ="and~to~>~REGULATE(V)";
      document.getElementById('divNum_4_1_18_1L1').innerHTML ="wê'lim'shol";
      document.getElementById('divNum_5_1_18_1L2').innerHTML ="in~the~DAY";
      document.getElementById('divNum_8_1_18_1L1').innerHTML ="ba'yom";
      document.getElementById('divNum_9_1_18_1L2').innerHTML ="and~in~NIGHT";
      document.getElementById('divNum_12_1_18_1L1').innerHTML ="u'va'lai'lah";
      document.getElementById('divNum_13_1_18_1L2').innerHTML ="and~to~>~make~SEPARATE(V)";
      document.getElementById('divNum_16_1_18_1L1').innerHTML ="ul'hav'dil";
      document.getElementById('divNum_17_1_18_1L2').innerHTML ="BETWEEN";
      document.getElementById('divNum_20_1_18_1L1').innerHTML ="beyn";
      document.getElementById('divNum_21_1_18_1L2').innerHTML ="the~LIGHT";
      document.getElementById('divNum_24_1_18_1L1').innerHTML ="ha'or";
      document.getElementById('divNum_25_1_18_1L2').innerHTML ="and~BETWEEN";
      document.getElementById('divNum_28_1_18_1L1').innerHTML ="u'veyn";
      document.getElementById('divNum_29_1_18_1L2').innerHTML ="the~DARKNESS";
      document.getElementById('divNum_32_1_18_2L1').innerHTML ="ha'hho'shekh";
      document.getElementById('divNum_33_1_18_2L2').innerHTML ="and~he~will~SEE(V)";
      document.getElementById('divNum_36_1_18_2L1').innerHTML ="wai'yar";
      document.getElementById('divNum_37_1_18_2L2').innerHTML ="Elohiym";
      document.getElementById('divNum_40_1_18_2L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_41_1_18_2L2').innerHTML ="GIVEN.THAT";
      document.getElementById('divNum_44_1_18_2L1').innerHTML ="ki";
      document.getElementById('divNum_45_1_18_2L2').innerHTML ="FUNCTIONAL";
      document.getElementById('divNum_48_1_18_2L1').innerHTML ="tov";
      document.getElementById('divNum_0_1_19_1L1').innerHTML ="1:19";
      document.getElementById('divNum_1_1_19_1L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_4_1_19_1L1').innerHTML ="wai'hi";
      document.getElementById('divNum_5_1_19_1L2').innerHTML ="EVENING";
      document.getElementById('divNum_8_1_19_1L1').innerHTML ="e'rev";
      document.getElementById('divNum_9_1_19_1L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_12_1_19_1L1').innerHTML ="wai'hi";
      document.getElementById('divNum_13_1_19_1L2').innerHTML ="MORNING";
      document.getElementById('divNum_16_1_19_1L1').innerHTML ="vo'qer";
      document.getElementById('divNum_17_1_19_1L2').innerHTML ="DAY";
      document.getElementById('divNum_20_1_19_1L1').innerHTML ="yom";
      document.getElementById('divNum_21_1_19_1L2').innerHTML ="FOURTH";
      document.getElementById('divNum_24_1_19_1L1').innerHTML ="rê'vi'i";
      document.getElementById('divNum_0_1_20_1L1').innerHTML ="1:20";
      document.getElementById('divNum_1_1_20_1L2').innerHTML ="and~he~will~SAY(V)";
      document.getElementById('divNum_4_1_20_1L1').innerHTML ="wai'yo'mer";
      document.getElementById('divNum_5_1_20_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_8_1_20_1L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_9_1_20_1L2').innerHTML ="they(mp)~will~SWARM(V)";
      document.getElementById('divNum_12_1_20_1L1').innerHTML ="yish're'tsu";
      document.getElementById('divNum_13_1_20_1L2').innerHTML ="the~WATER";
      document.getElementById('divNum_16_1_20_1L1').innerHTML ="ha'ma'yim";
      document.getElementById('divNum_17_1_20_1L2').innerHTML ="SWARMER";
      document.getElementById('divNum_20_1_20_1L1').innerHTML ="she'rets";
      document.getElementById('divNum_21_1_20_1L2').innerHTML ="BEING";
      document.getElementById('divNum_24_1_20_1L1').innerHTML ="ne'phesh";
      document.getElementById('divNum_25_1_20_1L2').innerHTML ="LIVING";
      document.getElementById('divNum_28_1_20_1L1').innerHTML ="hhai'yah";
      document.getElementById('divNum_29_1_20_1L2').innerHTML ="and~FLYER";
      document.getElementById('divNum_32_1_20_2L1').innerHTML ="wê'oph";
      document.getElementById('divNum_33_1_20_2L2').innerHTML ="he~will~much~FLY(V)";
      document.getElementById('divNum_36_1_20_2L1').innerHTML ="yê'o'pheyph";
      document.getElementById('divNum_37_1_20_2L2').innerHTML ="UPON";
      document.getElementById('divNum_40_1_20_2L1').innerHTML ="al";
      document.getElementById('divNum_41_1_20_2L2').innerHTML ="the~LAND";
      document.getElementById('divNum_44_1_20_2L1').innerHTML ="ha'a'rets";
      document.getElementById('divNum_45_1_20_2L2').innerHTML ="UPON";
      document.getElementById('divNum_48_1_20_2L1').innerHTML ="al";
      document.getElementById('divNum_49_1_20_2L2').innerHTML ="FACE";
      document.getElementById('divNum_52_1_20_2L1').innerHTML ="pê'ney";
      document.getElementById('divNum_53_1_20_2L2').innerHTML ="SHEET";
      document.getElementById('divNum_56_1_20_2L1').innerHTML ="rê'qi'a";
      document.getElementById('divNum_57_1_20_2L2').innerHTML ="the~SKY";
      document.getElementById('divNum_60_1_20_2L1').innerHTML ="ha'sha'ma'yim";
      document.getElementById('divNum_0_1_21_1L1').innerHTML ="1:21";
      document.getElementById('divNum_1_1_21_1L2').innerHTML ="and~he~will~FATTEN(V)";
      document.getElementById('divNum_4_1_21_1L1').innerHTML ="wai'yiv'ra";
      document.getElementById('divNum_5_1_21_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_8_1_21_1L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_9_1_21_1L2').innerHTML ="AT";
      document.getElementById('divNum_12_1_21_1L1').innerHTML ="et";
      document.getElementById('divNum_13_1_21_1L2').innerHTML ="the~CROCODILE";
      document.getElementById('divNum_16_1_21_1L1').innerHTML ="ha'ta'ni'nim1";
      document.getElementById('divNum_17_1_21_1L2').innerHTML ="the~GREAT";
      document.getElementById('divNum_20_1_21_1L1').innerHTML ="ha'ge'do'lim";
      document.getElementById('divNum_21_1_21_1L2').innerHTML ="and~AT";
      document.getElementById('divNum_24_1_21_1L1').innerHTML ="wê'eyt";
      document.getElementById('divNum_25_1_21_1L2').innerHTML ="ALL";
      document.getElementById('divNum_28_1_21_1L1').innerHTML ="kol";
      document.getElementById('divNum_29_1_21_1L2').innerHTML ="BEING";
      document.getElementById('divNum_32_1_21_2L1').innerHTML ="ne'phesh";
      document.getElementById('divNum_33_1_21_2L2').innerHTML ="the~LIVING";
      document.getElementById('divNum_36_1_21_2L1').innerHTML ="ha'hha'yah";
      document.getElementById('divNum_37_1_21_2L2').innerHTML ="the~TREAD(V)";
      document.getElementById('divNum_40_1_21_2L1').innerHTML ="ha'ro'me'set";
      document.getElementById('divNum_41_1_21_2L2').innerHTML ="WHICH";
      document.getElementById('divNum_44_1_21_2L1').innerHTML ="a'sher";
      document.getElementById('divNum_45_1_21_2L2').innerHTML ="they(mp)~did~SWARM(V)";
      document.getElementById('divNum_48_1_21_2L1').innerHTML ="shar'tsu";
      document.getElementById('divNum_49_1_21_2L2').innerHTML ="the~WATER";
      document.getElementById('divNum_52_1_21_2L1').innerHTML ="ha'ma'yim";
      document.getElementById('divNum_53_1_21_2L2').innerHTML ="to~KIND";
      document.getElementById('divNum_56_1_21_2L1').innerHTML ="lê'mi'ney'hem";
      document.getElementById('divNum_57_1_21_2L2').innerHTML ="and~AT";
      document.getElementById('divNum_60_1_21_2L1').innerHTML ="wê'eyt";
      document.getElementById('divNum_61_1_21_2L2').innerHTML ="ALL";
      document.getElementById('divNum_64_1_21_3L1').innerHTML ="kol";
      document.getElementById('divNum_65_1_21_3L2').innerHTML ="FLYER";
      document.getElementById('divNum_68_1_21_3L1').innerHTML ="oph";
      document.getElementById('divNum_69_1_21_3L2').innerHTML ="WING";
      document.getElementById('divNum_72_1_21_3L1').innerHTML ="ka'naph";
      document.getElementById('divNum_73_1_21_3L2').innerHTML ="to~KIND";
      document.getElementById('divNum_76_1_21_3L1').innerHTML ="lê'mi'ney'hu";
      document.getElementById('divNum_77_1_21_3L2').innerHTML ="and~he~will~SEE(V)";
      document.getElementById('divNum_80_1_21_3L1').innerHTML ="wai'yar";
      document.getElementById('divNum_81_1_21_3L2').innerHTML ="Elohiym";
      document.getElementById('divNum_84_1_21_3L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_85_1_21_3L2').innerHTML ="GIVEN.THAT";
      document.getElementById('divNum_88_1_21_3L1').innerHTML ="ki";
      document.getElementById('divNum_89_1_21_3L2').innerHTML ="FUNCTIONAL";
      document.getElementById('divNum_92_1_21_3L1').innerHTML ="tov";
      document.getElementById('divNum_0_1_22_1L1').innerHTML ="1:22";
      document.getElementById('divNum_1_1_22_1L2').innerHTML ="and~he~will~much~KNEEL(V)";
      document.getElementById('divNum_4_1_22_1L1').innerHTML ="wai'va'rekh";
      document.getElementById('divNum_5_1_22_1L2').innerHTML ="AT";
      document.getElementById('divNum_8_1_22_1L1').innerHTML ="o'tam";
      document.getElementById('divNum_9_1_22_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_12_1_22_1L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_13_1_22_1L2').innerHTML ="to~>~SAY(V)";
      document.getElementById('divNum_16_1_22_1L1').innerHTML ="ley'mor";
      document.getElementById('divNum_17_1_22_1L2').innerHTML ="!(mp)~REPRODUCE(V)";
      document.getElementById('divNum_20_1_22_1L1').innerHTML ="pê'ru";
      document.getElementById('divNum_21_1_22_1L2').innerHTML ="and~!(mp)~INCREASE(V)";
      document.getElementById('divNum_24_1_22_1L1').innerHTML ="ur'vu";
      document.getElementById('divNum_25_1_22_1L2').innerHTML ="and~!(mp)~FILL(V)";
      document.getElementById('divNum_28_1_22_1L1').innerHTML ="u'mil'u";
      document.getElementById('divNum_29_1_22_1L2').innerHTML ="AT";
      document.getElementById('divNum_32_1_22_2L1').innerHTML ="et";
      document.getElementById('divNum_33_1_22_2L2').innerHTML ="the~WATER";
      document.getElementById('divNum_36_1_22_2L1').innerHTML ="ha'ma'yim";
      document.getElementById('divNum_37_1_22_2L2').innerHTML ="in~the~SEA";
      document.getElementById('divNum_40_1_22_2L1').innerHTML ="ba'ya'mim";
      document.getElementById('divNum_41_1_22_2L2').innerHTML ="and~the~FLYER";
      document.getElementById('divNum_44_1_22_2L1').innerHTML ="wê'ha'oph";
      document.getElementById('divNum_45_1_22_2L2').innerHTML ="he~did~INCREASE(V)";
      document.getElementById('divNum_48_1_22_2L1').innerHTML ="yi'rev";
      document.getElementById('divNum_49_1_22_2L2').innerHTML ="in~the~LAND";
      document.getElementById('divNum_52_1_22_2L1').innerHTML ="ba'a'rets";
      document.getElementById('divNum_0_1_23_1L1').innerHTML ="1:23";
      document.getElementById('divNum_1_1_23_1L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_4_1_23_1L1').innerHTML ="wai'hi";
      document.getElementById('divNum_5_1_23_1L2').innerHTML ="EVENING";
      document.getElementById('divNum_8_1_23_1L1').innerHTML ="e'rev";
      document.getElementById('divNum_9_1_23_1L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_12_1_23_1L1').innerHTML ="wai'hi";
      document.getElementById('divNum_13_1_23_1L2').innerHTML ="MORNING";
      document.getElementById('divNum_16_1_23_1L1').innerHTML ="vo'qer";
      document.getElementById('divNum_17_1_23_1L2').innerHTML ="DAY";
      document.getElementById('divNum_20_1_23_1L1').innerHTML ="yom";
      document.getElementById('divNum_21_1_23_1L2').innerHTML ="FIFTH";
      document.getElementById('divNum_24_1_23_1L1').innerHTML ="hha'mi'shi";
      document.getElementById('divNum_0_1_24_1L1').innerHTML ="1:24";
      document.getElementById('divNum_1_1_24_1L2').innerHTML ="and~he~will~SAY(V)";
      document.getElementById('divNum_4_1_24_1L1').innerHTML ="wai'yo'mer";
      document.getElementById('divNum_5_1_24_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_8_1_24_1L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_9_1_24_1L2').innerHTML ="she~will~make~GO.OUT(V)";
      document.getElementById('divNum_12_1_24_1L1').innerHTML ="to'tsey";
      document.getElementById('divNum_13_1_24_1L2').innerHTML ="the~LAND";
      document.getElementById('divNum_16_1_24_1L1').innerHTML ="ha'a'rets";
      document.getElementById('divNum_17_1_24_1L2').innerHTML ="BEING";
      document.getElementById('divNum_20_1_24_1L1').innerHTML ="ne'phesh";
      document.getElementById('divNum_21_1_24_1L2').innerHTML ="LIVING";
      document.getElementById('divNum_24_1_24_1L1').innerHTML ="hhai'yah";
      document.getElementById('divNum_25_1_24_1L2').innerHTML ="to~KIND";
      document.getElementById('divNum_28_1_24_1L1').innerHTML ="lê'mi'nah";
      document.getElementById('divNum_29_1_24_1L2').innerHTML ="BEAST";
      document.getElementById('divNum_32_1_24_2L1').innerHTML ="bê'hey'mah";
      document.getElementById('divNum_33_1_24_2L2').innerHTML ="and~TREADER";
      document.getElementById('divNum_36_1_24_2L1').innerHTML ="wa're'mes";
      document.getElementById('divNum_37_1_24_2L2').innerHTML ="and~LIVING";
      document.getElementById('divNum_40_1_24_2L1').innerHTML ="wê'hhai'to2";
      document.getElementById('divNum_41_1_24_2L2').innerHTML ="LAND";
      document.getElementById('divNum_44_1_24_2L1').innerHTML ="e'rets";
      document.getElementById('divNum_45_1_24_2L2').innerHTML ="to~KIND";
      document.getElementById('divNum_48_1_24_2L1').innerHTML ="lê'mi'nah";
      document.getElementById('divNum_49_1_24_2L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_52_1_24_2L1').innerHTML ="wai'hi";
      document.getElementById('divNum_53_1_24_2L2').innerHTML ="SO";
      document.getElementById('divNum_56_1_24_2L1').innerHTML ="kheyn3";
      document.getElementById('divNum_0_1_25_1L1').innerHTML ="1:25";
      document.getElementById('divNum_1_1_25_1L2').innerHTML ="and~he~will~DO(V)";
      document.getElementById('divNum_4_1_25_1L1').innerHTML ="wai'ya'as";
      document.getElementById('divNum_5_1_25_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_8_1_25_1L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_9_1_25_1L2').innerHTML ="AT";
      document.getElementById('divNum_12_1_25_1L1').innerHTML ="et";
      document.getElementById('divNum_13_1_25_1L2').innerHTML ="LIVING";
      document.getElementById('divNum_16_1_25_1L1').innerHTML ="hhai'yat";
      document.getElementById('divNum_17_1_25_1L2').innerHTML ="the~LAND";
      document.getElementById('divNum_20_1_25_1L1').innerHTML ="ha'a'rets";
      document.getElementById('divNum_21_1_25_1L2').innerHTML ="to~KIND";
      document.getElementById('divNum_24_1_25_1L1').innerHTML ="lê'mi'nah";
      document.getElementById('divNum_25_1_25_1L2').innerHTML ="and~AT";
      document.getElementById('divNum_28_1_25_1L1').innerHTML ="wê'et";
      document.getElementById('divNum_29_1_25_1L2').innerHTML ="the~BEAST";
      document.getElementById('divNum_32_1_25_2L1').innerHTML ="ha'be'hey'mah";
      document.getElementById('divNum_33_1_25_2L2').innerHTML ="to~KIND";
      document.getElementById('divNum_36_1_25_2L1').innerHTML ="lê'mi'nah";
      document.getElementById('divNum_37_1_25_2L2').innerHTML ="and~AT";
      document.getElementById('divNum_40_1_25_2L1').innerHTML ="wê'eyt";
      document.getElementById('divNum_41_1_25_2L2').innerHTML ="ALL";
      document.getElementById('divNum_44_1_25_2L1').innerHTML ="kol";
      document.getElementById('divNum_45_1_25_2L2').innerHTML ="TREADER";
      document.getElementById('divNum_48_1_25_2L1').innerHTML ="re'mes";
      document.getElementById('divNum_49_1_25_2L2').innerHTML ="the~GROUND";
      document.getElementById('divNum_52_1_25_2L1').innerHTML ="ha'a'da'mah";
      document.getElementById('divNum_53_1_25_2L2').innerHTML ="to~KIND";
      document.getElementById('divNum_56_1_25_2L1').innerHTML ="lê'mi'ney'hu";
      document.getElementById('divNum_57_1_25_2L2').innerHTML ="and~he~will~SEE(V)";
      document.getElementById('divNum_60_1_25_2L1').innerHTML ="wai'yar";
      document.getElementById('divNum_61_1_25_2L2').innerHTML ="Elohiym";
      document.getElementById('divNum_64_1_25_3L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_65_1_25_3L2').innerHTML ="GIVEN.THAT";
      document.getElementById('divNum_68_1_25_3L1').innerHTML ="ki";
      document.getElementById('divNum_69_1_25_3L2').innerHTML ="FUNCTIONAL";
      document.getElementById('divNum_72_1_25_3L1').innerHTML ="tov";
      document.getElementById('divNum_0_1_26_1L1').innerHTML ="1:26";
      document.getElementById('divNum_1_1_26_1L2').innerHTML ="and~he~will~SAY(V)";
      document.getElementById('divNum_4_1_26_1L1').innerHTML ="wai'yo'mer";
      document.getElementById('divNum_5_1_26_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_8_1_26_1L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_9_1_26_1L2').innerHTML ="we(cp)~will~DO(V)";
      document.getElementById('divNum_12_1_26_1L1').innerHTML ="na'a'seh";
      document.getElementById('divNum_13_1_26_1L2').innerHTML ="HUMAN";
      document.getElementById('divNum_16_1_26_1L1').innerHTML ="a'dam";
      document.getElementById('divNum_17_1_26_1L2').innerHTML ="in~IMAGE";
      document.getElementById('divNum_20_1_26_1L1').innerHTML ="bê'tsal'mey'nu";
      document.getElementById('divNum_21_1_26_1L2').innerHTML ="like~LIKENESS";
      document.getElementById('divNum_24_1_26_1L1').innerHTML ="kid'mu'tey'nu";
      document.getElementById('divNum_25_1_26_1L2').innerHTML ="and~he~did~RULE(V)";
      document.getElementById('divNum_28_1_26_1L1').innerHTML ="wê'yir'du";
      document.getElementById('divNum_29_1_26_1L2').innerHTML ="in~FISH";
      document.getElementById('divNum_32_1_26_2L1').innerHTML ="vid'gat";
      document.getElementById('divNum_33_1_26_2L2').innerHTML ="the~SEA";
      document.getElementById('divNum_36_1_26_2L1').innerHTML ="hai'yam";
      document.getElementById('divNum_37_1_26_2L2').innerHTML ="and~in~FLYER";
      document.getElementById('divNum_40_1_26_2L1').innerHTML ="uv'oph";
      document.getElementById('divNum_41_1_26_2L2').innerHTML ="the~SKY";
      document.getElementById('divNum_44_1_26_2L1').innerHTML ="ha'sha'ma'yim";
      document.getElementById('divNum_45_1_26_2L2').innerHTML ="and~in~the~BEAST";
      document.getElementById('divNum_48_1_26_2L1').innerHTML ="u'va'be'hey'mah";
      document.getElementById('divNum_49_1_26_2L2').innerHTML ="and~in~ALL";
      document.getElementById('divNum_52_1_26_2L1').innerHTML ="uv'khol";
      document.getElementById('divNum_53_1_26_2L2').innerHTML ="the~LAND";
      document.getElementById('divNum_56_1_26_2L1').innerHTML ="ha'a'rets";
      document.getElementById('divNum_57_1_26_2L2').innerHTML ="and~in~ALL";
      document.getElementById('divNum_60_1_26_2L1').innerHTML ="uv'khol";
      document.getElementById('divNum_61_1_26_2L2').innerHTML ="the~TREADER";
      document.getElementById('divNum_64_1_26_3L1').innerHTML ="ha're'mes";
      document.getElementById('divNum_65_1_26_3L2').innerHTML ="the~TREAD(V)";
      document.getElementById('divNum_68_1_26_3L1').innerHTML ="ha'ro'meys";
      document.getElementById('divNum_69_1_26_3L2').innerHTML ="UPON";
      document.getElementById('divNum_72_1_26_3L1').innerHTML ="al";
      document.getElementById('divNum_73_1_26_3L2').innerHTML ="the~LAND";
      document.getElementById('divNum_76_1_26_3L1').innerHTML ="ha'a'rets";
      document.getElementById('divNum_0_1_27_1L1').innerHTML ="1:27";
      document.getElementById('divNum_1_1_27_1L2').innerHTML ="and~he~will~FATTEN(V)";
      document.getElementById('divNum_4_1_27_1L1').innerHTML ="wai'yiv'ra";
      document.getElementById('divNum_5_1_27_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_8_1_27_1L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_9_1_27_1L2').innerHTML ="AT";
      document.getElementById('divNum_12_1_27_1L1').innerHTML ="et";
      document.getElementById('divNum_13_1_27_1L2').innerHTML ="the~HUMAN";
      document.getElementById('divNum_16_1_27_1L1').innerHTML ="ha'a'dam";
      document.getElementById('divNum_17_1_27_1L2').innerHTML ="in~IMAGE";
      document.getElementById('divNum_20_1_27_1L1').innerHTML ="bê'tsal'mo";
      document.getElementById('divNum_21_1_27_1L2').innerHTML ="in~IMAGE";
      document.getElementById('divNum_24_1_27_1L1').innerHTML ="bê'tse'lem";
      document.getElementById('divNum_25_1_27_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_28_1_27_1L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_0_1_28_1L1').innerHTML ="1:28";
      document.getElementById('divNum_1_1_28_1L2').innerHTML ="and~he~will~much~KNEEL(V)";
      document.getElementById('divNum_4_1_28_1L1').innerHTML ="wai'va'rekh";
      document.getElementById('divNum_5_1_28_1L2').innerHTML ="AT";
      document.getElementById('divNum_8_1_28_1L1').innerHTML ="o'tam";
      document.getElementById('divNum_9_1_28_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_12_1_28_1L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_13_1_28_1L2').innerHTML ="and~he~will~SAY(V)";
      document.getElementById('divNum_16_1_28_1L1').innerHTML ="wai'yo'mer";
      document.getElementById('divNum_17_1_28_1L2').innerHTML ="to~them(mp)";
      document.getElementById('divNum_20_1_28_1L1').innerHTML ="Elohiym";
      document.getElementById('divNum_21_1_28_1L2').innerHTML ="POWER~s";
      document.getElementById('divNum_24_1_28_1L1').innerHTML ="!(mp)~REPRODUCE(V)";
      document.getElementById('divNum_25_1_28_1L2').innerHTML ="1858";
      document.getElementById('divNum_28_1_28_1L1').innerHTML ="and~!(mp)~INCREASE(V)";
      document.getElementById('divNum_29_1_28_1L2').innerHTML ="2197";
      document.getElementById('divNum_32_1_28_2L1').innerHTML ="and~!(mp)~FILL(V)";
      document.getElementById('divNum_33_1_28_2L2').innerHTML ="1192";
      document.getElementById('divNum_36_1_28_2L1').innerHTML ="AT";
      document.getElementById('divNum_37_1_28_2L2').innerHTML ="85";
      document.getElementById('divNum_40_1_28_2L1').innerHTML ="the~LAND";
      document.getElementById('divNum_41_1_28_2L2').innerHTML ="2331";
      document.getElementById('divNum_44_1_28_2L1').innerHTML ="and~!(mp)~SUBDUE(V)";
      document.getElementById('divNum_45_1_28_2L2').innerHTML ="205~her";
      document.getElementById('divNum_48_1_28_2L1').innerHTML ="and~!(mp)~RULE(V)";
      document.getElementById('divNum_49_1_28_2L2').innerHTML ="2235";
      document.getElementById('divNum_52_1_28_2L1').innerHTML ="in~FISH";
      document.getElementById('divNum_53_1_28_2L2').innerHTML ="395";
      document.getElementById('divNum_56_1_28_2L1').innerHTML ="the~SEA";
      document.getElementById('divNum_57_1_28_2L2').innerHTML ="895";
      document.getElementById('divNum_60_1_28_2L1').innerHTML ="and~in~FLYER";
      document.getElementById('divNum_61_1_28_2L2').innerHTML ="1701";
      document.getElementById('divNum_64_1_28_3L1').innerHTML ="the~SKY";
      document.getElementById('divNum_65_1_28_3L2').innerHTML ="2512~s2";
      document.getElementById('divNum_68_1_28_3L1').innerHTML ="and~in~ALL";
      document.getElementById('divNum_69_1_28_3L2').innerHTML ="957";
      document.getElementById('divNum_72_1_28_3L1').innerHTML ="LIVING";
      document.getElementById('divNum_73_1_28_3L2').innerHTML ="667";
      document.getElementById('divNum_76_1_28_3L1').innerHTML ="the~TREAD(V)";
      document.getElementById('divNum_77_1_28_3L2').innerHTML ="2312~ing(fs)";
      document.getElementById('divNum_80_1_28_3L1').innerHTML ="UPON";
      document.getElementById('divNum_81_1_28_3L2').innerHTML ="1616";
      document.getElementById('divNum_84_1_28_3L1').innerHTML ="the~LAND";
      document.getElementById('divNum_85_1_28_3L2').innerHTML ="2331";
      document.getElementById('divNum_0_1_29_1L1').innerHTML ="1:29";
      document.getElementById('divNum_1_1_29_1L2').innerHTML ="and~he~will~SAY(V)";
      document.getElementById('divNum_4_1_29_1L1').innerHTML ="wai'yo'mer";
      document.getElementById('divNum_5_1_29_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_8_1_29_1L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_9_1_29_1L2').innerHTML ="LOOK";
      document.getElementById('divNum_12_1_29_1L1').innerHTML ="hin'neyh";
      document.getElementById('divNum_13_1_29_1L2').innerHTML ="I(cs)~did~GIVE(V)";
      document.getElementById('divNum_16_1_29_1L1').innerHTML ="na'ta'ti";
      document.getElementById('divNum_17_1_29_1L2').innerHTML ="to~you(mp)";
      document.getElementById('divNum_20_1_29_1L1').innerHTML ="AT";
      document.getElementById('divNum_21_1_29_1L2').innerHTML ="85";
      document.getElementById('divNum_24_1_29_1L1').innerHTML ="ALL";
      document.getElementById('divNum_25_1_29_1L2').innerHTML ="957";
      document.getElementById('divNum_28_1_29_1L1').innerHTML ="HERB";
      document.getElementById('divNum_29_1_29_1L2').innerHTML ="1691";
      document.getElementById('divNum_32_1_29_2L1').innerHTML ="SOW(V)";
      document.getElementById('divNum_33_1_29_2L2').innerHTML ="605~ing(ms)";
      document.getElementById('divNum_36_1_29_2L1').innerHTML ="SEED";
      document.getElementById('divNum_37_1_29_2L2').innerHTML ="606";
      document.getElementById('divNum_40_1_29_2L1').innerHTML ="WHICH";
      document.getElementById('divNum_41_1_29_2L2').innerHTML ="2589";
      document.getElementById('divNum_44_1_29_2L1').innerHTML ="UPON";
      document.getElementById('divNum_45_1_29_2L2').innerHTML ="1616";
      document.getElementById('divNum_48_1_29_2L1').innerHTML ="FACE";
      document.getElementById('divNum_49_1_29_2L2').innerHTML ="1815~s";
      document.getElementById('divNum_52_1_29_2L1').innerHTML ="ALL";
      document.getElementById('divNum_53_1_29_2L2').innerHTML ="957";
      document.getElementById('divNum_56_1_29_2L1').innerHTML ="the~LAND";
      document.getElementById('divNum_57_1_29_2L2').innerHTML ="2331";
      document.getElementById('divNum_60_1_29_2L1').innerHTML ="and~AT";
      document.getElementById('divNum_61_1_29_2L2').innerHTML ="85";
      document.getElementById('divNum_64_1_29_3L1').innerHTML ="ALL";
      document.getElementById('divNum_65_1_29_3L2').innerHTML ="957";
      document.getElementById('divNum_68_1_29_3L1').innerHTML ="the~TREE";
      document.getElementById('divNum_69_1_29_3L2').innerHTML ="1706";
      document.getElementById('divNum_72_1_29_3L1').innerHTML ="WHICH";
      document.getElementById('divNum_73_1_29_3L2').innerHTML ="2589";
      document.getElementById('divNum_76_1_29_3L1').innerHTML ="in~him";
      document.getElementById('divNum_77_1_29_3L2').innerHTML ="בוַֹ";
      document.getElementById('divNum_80_1_29_3L1').innerHTML ="1859";
      document.getElementById('divNum_81_1_29_3L2').innerHTML ="פְּרִׁי";
      document.getElementById('divNum_84_1_29_3L1').innerHTML ="1706";
      document.getElementById('divNum_85_1_29_3L2').innerHTML ="עֵץ";
      document.getElementById('divNum_88_1_29_3L1').innerHTML ="605~ing(ms)";
      document.getElementById('divNum_89_1_29_3L2').innerHTML ="זֹרֵעַַ";
      document.getElementById('divNum_92_1_29_3L1').innerHTML ="606";
      document.getElementById('divNum_93_1_29_3L2').innerHTML ="זָּרַע";
      document.getElementById('divNum_96_1_29_4L1').innerHTML ="לָּכֶם";
      document.getElementById('divNum_97_1_29_4L2').innerHTML ="la'khem";
      document.getElementById('divNum_100_1_29_4L1').innerHTML ="יִׁהְּיֶה";
      document.getElementById('divNum_101_1_29_4L2').innerHTML ="yih'yeh";
      document.getElementById('divNum_104_1_29_4L1').innerHTML ="לְּאָכְּלָּה";
      document.getElementById('divNum_105_1_29_4L2').innerHTML ="lê'akh'lah";
      document.getElementById('divNum_0_1_30_1L1').innerHTML ="1:30";
      document.getElementById('divNum_1_1_30_1L2').innerHTML ="and~to~ALL";
      document.getElementById('divNum_4_1_30_1L1').innerHTML ="ul'khol";
      document.getElementById('divNum_5_1_30_1L2').innerHTML ="LIVING";
      document.getElementById('divNum_8_1_30_1L1').innerHTML ="hhai'yat";
      document.getElementById('divNum_9_1_30_1L2').innerHTML ="the~LAND";
      document.getElementById('divNum_12_1_30_1L1').innerHTML ="ha'a'rets";
      document.getElementById('divNum_13_1_30_1L2').innerHTML ="and~to~ALL";
      document.getElementById('divNum_16_1_30_1L1').innerHTML ="ul'khol";
      document.getElementById('divNum_17_1_30_1L2').innerHTML ="FLYER";
      document.getElementById('divNum_20_1_30_1L1').innerHTML ="oph";
      document.getElementById('divNum_21_1_30_1L2').innerHTML ="the~SKY";
      document.getElementById('divNum_24_1_30_1L1').innerHTML ="ha'sha'ma'yim";
      document.getElementById('divNum_25_1_30_1L2').innerHTML ="and~to~ALL";
      document.getElementById('divNum_28_1_30_1L1').innerHTML ="ul'khol";
      document.getElementById('divNum_29_1_30_1L2').innerHTML ="TREAD(V)";
      document.getElementById('divNum_32_1_30_2L1').innerHTML ="ro'meys";
      document.getElementById('divNum_33_1_30_2L2').innerHTML ="UPON";
      document.getElementById('divNum_36_1_30_2L1').innerHTML ="al";
      document.getElementById('divNum_37_1_30_2L2').innerHTML ="the~LAND";
      document.getElementById('divNum_40_1_30_2L1').innerHTML ="ha'a'rets";
      document.getElementById('divNum_41_1_30_2L2').innerHTML ="WHICH";
      document.getElementById('divNum_44_1_30_2L1').innerHTML ="a'sher";
      document.getElementById('divNum_45_1_30_2L2').innerHTML ="in~him";
      document.getElementById('divNum_48_1_30_2L1').innerHTML ="BEING";
      document.getElementById('divNum_49_1_30_2L2').innerHTML ="1902";
      document.getElementById('divNum_52_1_30_2L1').innerHTML ="LIVING";
      document.getElementById('divNum_53_1_30_2L2').innerHTML ="667";
      document.getElementById('divNum_56_1_30_2L1').innerHTML ="AT";
      document.getElementById('divNum_57_1_30_2L2').innerHTML ="85";
      document.getElementById('divNum_60_1_30_2L1').innerHTML ="ALL";
      document.getElementById('divNum_61_1_30_2L2').innerHTML ="957";
      document.getElementById('divNum_64_1_30_3L1').innerHTML ="GREEN";
      document.getElementById('divNum_65_1_30_3L2').innerHTML ="2349";
      document.getElementById('divNum_68_1_30_3L1').innerHTML ="HERB";
      document.getElementById('divNum_69_1_30_3L2').innerHTML ="1691";
      document.getElementById('divNum_72_1_30_3L1').innerHTML ="to~FOOD";
      document.getElementById('divNum_73_1_30_3L2').innerHTML ="949";
      document.getElementById('divNum_76_1_30_3L1').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_77_1_30_3L2').innerHTML ="505";
      document.getElementById('divNum_80_1_30_3L1').innerHTML ="SO";
      document.getElementById('divNum_81_1_30_3L2').innerHTML ="968";
      document.getElementById('divNum_0_1_31_1L1').innerHTML ="1:31";
      document.getElementById('divNum_1_1_31_1L2').innerHTML ="and~he~will~SEE(V)";
      document.getElementById('divNum_4_1_31_1L1').innerHTML ="wai'yar";
      document.getElementById('divNum_5_1_31_1L2').innerHTML ="Elohiym";
      document.getElementById('divNum_8_1_31_1L1').innerHTML ="e'lo'him";
      document.getElementById('divNum_9_1_31_1L2').innerHTML ="AT";
      document.getElementById('divNum_12_1_31_1L1').innerHTML ="et";
      document.getElementById('divNum_13_1_31_1L2').innerHTML ="ALL";
      document.getElementById('divNum_16_1_31_1L1').innerHTML ="kol";
      document.getElementById('divNum_17_1_31_1L2').innerHTML ="WHICH";
      document.getElementById('divNum_20_1_31_1L1').innerHTML ="a'sher";
      document.getElementById('divNum_21_1_31_1L2').innerHTML ="he~did~DO(V)";
      document.getElementById('divNum_24_1_31_1L1').innerHTML ="a'sah";
      document.getElementById('divNum_25_1_31_1L2').innerHTML ="and~LOOK";
      document.getElementById('divNum_28_1_31_1L1').innerHTML ="wê'hin'neyh";
      document.getElementById('divNum_29_1_31_1L2').innerHTML ="FUNCTIONAL";
      document.getElementById('divNum_32_1_31_2L1').innerHTML ="tov";
      document.getElementById('divNum_33_1_31_2L2').innerHTML ="MANY";
      document.getElementById('divNum_36_1_31_2L1').innerHTML ="mê'od";
      document.getElementById('divNum_37_1_31_2L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_40_1_31_2L1').innerHTML ="wai'hi";
      document.getElementById('divNum_41_1_31_2L2').innerHTML ="EVENING";
      document.getElementById('divNum_44_1_31_2L1').innerHTML ="e'rev";
      document.getElementById('divNum_45_1_31_2L2').innerHTML ="and~he~will~EXIST(V)";
      document.getElementById('divNum_48_1_31_2L1').innerHTML ="wai'hi";
      document.getElementById('divNum_49_1_31_2L2').innerHTML ="MORNING";
      document.getElementById('divNum_52_1_31_2L1').innerHTML ="vo'qer";
      document.getElementById('divNum_53_1_31_2L2').innerHTML ="DAY";
      document.getElementById('divNum_56_1_31_2L1').innerHTML ="yom";
      document.getElementById('divNum_57_1_31_2L2').innerHTML ="the~SIXTH";
      document.getElementById('divNum_60_1_31_2L1').innerHTML ="ha'shi'shi2";
	return false;}
//functionName_cahpter_verse_line
switch_Heb_Translit_1_1_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_1').innerHTML == "bê'rey'shit"){
      document.getElementById('divNum_4_1_1_1L1').innerHTML ="בְּרֵאשִׁית";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_1').innerHTML == "בְּרֵאשִׁית"){
      document.getElementById('divNum_4_1_1_1L1').innerHTML ="bê'rey'shit";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_1').innerHTML == "ba'ra"){
      document.getElementById('divNum_8_1_1_1L1').innerHTML ="בָּרָּא";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_1').innerHTML == "בָּרָּא"){
      document.getElementById('divNum_8_1_1_1L1').innerHTML ="ba'ra";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_1').innerHTML == "e'lo'him"){
      document.getElementById('divNum_12_1_1_1L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_1').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_12_1_1_1L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_1').innerHTML == "eyt"){
      document.getElementById('divNum_16_1_1_1L1').innerHTML ="אֵת";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_1').innerHTML == "אֵת"){
      document.getElementById('divNum_16_1_1_1L1').innerHTML ="eyt";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_1').innerHTML == "ha'sha'ma'yim"){
      document.getElementById('divNum_20_1_1_1L1').innerHTML ="הַשָּמַיִׁם";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_1').innerHTML == "הַשָּמַיִׁם"){
      document.getElementById('divNum_20_1_1_1L1').innerHTML ="ha'sha'ma'yim";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_1').innerHTML == "wê'eyt"){
      document.getElementById('divNum_24_1_1_1L1').innerHTML ="וְּאֵת";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_1').innerHTML == "וְּאֵת"){
      document.getElementById('divNum_24_1_1_1L1').innerHTML ="wê'eyt";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_1').innerHTML == "ha'a'rets"){
      document.getElementById('divNum_28_1_1_1L1').innerHTML ="הָּאָרֶץ";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_1').innerHTML == "הָּאָרֶץ"){
      document.getElementById('divNum_28_1_1_1L1').innerHTML ="ha'a'rets";

} //End of switch_Heb_Translit_1_1_1function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_2_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_2').innerHTML == "wê'ha'a'rets"){
      document.getElementById('divNum_4_1_2_1L1').innerHTML ="וְּהָּאָרֶץ";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_2').innerHTML == "וְּהָּאָרֶץ"){
      document.getElementById('divNum_4_1_2_1L1').innerHTML ="wê'ha'a'rets";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_2').innerHTML == "hai'tah"){
      document.getElementById('divNum_8_1_2_1L1').innerHTML ="הָּיְּתָּה";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_2').innerHTML == "הָּיְּתָּה"){
      document.getElementById('divNum_8_1_2_1L1').innerHTML ="hai'tah";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_2').innerHTML == "to'hu"){
      document.getElementById('divNum_12_1_2_1L1').innerHTML ="תֹהוּ";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_2').innerHTML == "תֹהוּ"){
      document.getElementById('divNum_12_1_2_1L1').innerHTML ="to'hu";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_2').innerHTML == "wa'vo'hu"){
      document.getElementById('divNum_16_1_2_1L1').innerHTML ="וָּבֹהוּ";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_2').innerHTML == "וָּבֹהוּ"){
      document.getElementById('divNum_16_1_2_1L1').innerHTML ="wa'vo'hu";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_2').innerHTML == "wê'hho'shekh"){
      document.getElementById('divNum_20_1_2_1L1').innerHTML ="וְּחֹשֶךְ";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_2').innerHTML == "וְּחֹשֶךְ"){
      document.getElementById('divNum_20_1_2_1L1').innerHTML ="wê'hho'shekh";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_2').innerHTML == "al"){
      document.getElementById('divNum_24_1_2_1L1').innerHTML ="עַל";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_2').innerHTML == "עַל"){
      document.getElementById('divNum_24_1_2_1L1').innerHTML ="al";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_2').innerHTML == "pê'ney"){
      document.getElementById('divNum_28_1_2_1L1').innerHTML ="פְּנֵי";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_2').innerHTML == "פְּנֵי"){
      document.getElementById('divNum_28_1_2_1L1').innerHTML ="pê'ney";

} //End of switch_Heb_Translit_1_2_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_2_2(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_32_1_2').innerHTML == "tê'hom"){
      document.getElementById('divNum_32_1_2_2L1').innerHTML ="תְּהוֹם";
    if( idElement == 1  &&  document.getElementById('divNum_32_1_2').innerHTML == "תְּהוֹם"){
      document.getElementById('divNum_32_1_2_2L1').innerHTML ="tê'hom";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_2').innerHTML == "wê'ru'ahh"){
      document.getElementById('divNum_36_1_2_2L1').innerHTML ="וְּרוּחַַ";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_2').innerHTML == "וְּרוּחַַ"){
      document.getElementById('divNum_36_1_2_2L1').innerHTML ="wê'ru'ahh";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_2').innerHTML == "e'lo'him"){
      document.getElementById('divNum_40_1_2_2L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_2').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_40_1_2_2L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_2').innerHTML == "mê'ra'hhe'phet"){
      document.getElementById('divNum_44_1_2_2L1').innerHTML ="מְּרַחֶפֶת";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_2').innerHTML == "מְּרַחֶפֶת"){
      document.getElementById('divNum_44_1_2_2L1').innerHTML ="mê'ra'hhe'phet";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_2').innerHTML == "al"){
      document.getElementById('divNum_48_1_2_2L1').innerHTML ="עַל";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_2').innerHTML == "עַל"){
      document.getElementById('divNum_48_1_2_2L1').innerHTML ="al";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_2').innerHTML == "pê'ney"){
      document.getElementById('divNum_52_1_2_2L1').innerHTML ="פְּנֵי";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_2').innerHTML == "פְּנֵי"){
      document.getElementById('divNum_52_1_2_2L1').innerHTML ="pê'ney";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_2').innerHTML == "ha'ma'yim"){
      document.getElementById('divNum_56_1_2_2L1').innerHTML ="הַמָּיִׁם";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_2').innerHTML == "הַמָּיִׁם"){
      document.getElementById('divNum_56_1_2_2L1').innerHTML ="ha'ma'yim";
//functionName_cahpter_verse_line
switch_Heb_Translit_1_3_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_3').innerHTML == "wai'yo'mer"){
      document.getElementById('divNum_4_1_3_1L1').innerHTML ="וַיֹאמֶר";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_3').innerHTML == "וַיֹאמֶר"){
      document.getElementById('divNum_4_1_3_1L1').innerHTML ="wai'yo'mer";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_3').innerHTML == "e'lo'him"){
      document.getElementById('divNum_8_1_3_1L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_3').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_8_1_3_1L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_3').innerHTML == "yê'hi"){
      document.getElementById('divNum_12_1_3_1L1').innerHTML ="יְּהִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_3').innerHTML == "יְּהִׁי"){
      document.getElementById('divNum_12_1_3_1L1').innerHTML ="yê'hi";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_3').innerHTML == "or"){
      document.getElementById('divNum_16_1_3_1L1').innerHTML ="אוֹר";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_3').innerHTML == "אוֹר"){
      document.getElementById('divNum_16_1_3_1L1').innerHTML ="or";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_3').innerHTML == "wai'hi"){
      document.getElementById('divNum_20_1_3_1L1').innerHTML ="וַיְּהִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_3').innerHTML == "וַיְּהִׁי"){
      document.getElementById('divNum_20_1_3_1L1').innerHTML ="wai'hi";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_3').innerHTML == "or"){
      document.getElementById('divNum_24_1_3_1L1').innerHTML ="אוֹר";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_3').innerHTML == "אוֹר"){
      document.getElementById('divNum_24_1_3_1L1').innerHTML ="or";
//functionName_cahpter_verse_line
switch_Heb_Translit_1_4_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_4').innerHTML == "wai'yar"){
      document.getElementById('divNum_4_1_4_1L1').innerHTML ="וַיַרְּא";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_4').innerHTML == "וַיַרְּא"){
      document.getElementById('divNum_4_1_4_1L1').innerHTML ="wai'yar";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_4').innerHTML == "e'lo'him"){
      document.getElementById('divNum_8_1_4_1L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_4').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_8_1_4_1L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_4').innerHTML == "et"){
      document.getElementById('divNum_12_1_4_1L1').innerHTML ="אֶת";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_4').innerHTML == "אֶת"){
      document.getElementById('divNum_12_1_4_1L1').innerHTML ="et";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_4').innerHTML == "ha'or"){
      document.getElementById('divNum_16_1_4_1L1').innerHTML ="הָּאוֹר";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_4').innerHTML == "הָּאוֹר"){
      document.getElementById('divNum_16_1_4_1L1').innerHTML ="ha'or";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_4').innerHTML == "ki"){
      document.getElementById('divNum_20_1_4_1L1').innerHTML ="כִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_4').innerHTML == "כִׁי"){
      document.getElementById('divNum_20_1_4_1L1').innerHTML ="ki";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_4').innerHTML == "tov"){
      document.getElementById('divNum_24_1_4_1L1').innerHTML ="טוֹב";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_4').innerHTML == "טוֹב"){
      document.getElementById('divNum_24_1_4_1L1').innerHTML ="tov";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_4').innerHTML == "wai'yav'deyl"){
      document.getElementById('divNum_28_1_4_1L1').innerHTML ="וַיַבְּדֵל";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_4').innerHTML == "וַיַבְּדֵל"){
      document.getElementById('divNum_28_1_4_1L1').innerHTML ="wai'yav'deyl";

} //End of switch_Heb_Translit_1_4_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_4_2(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_32_1_4').innerHTML == "e'lo'him"){
      document.getElementById('divNum_32_1_4_2L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_32_1_4').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_32_1_4_2L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_4').innerHTML == "beyn"){
      document.getElementById('divNum_36_1_4_2L1').innerHTML ="בֵין";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_4').innerHTML == "בֵין"){
      document.getElementById('divNum_36_1_4_2L1').innerHTML ="beyn";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_4').innerHTML == "ha'or"){
      document.getElementById('divNum_40_1_4_2L1').innerHTML ="הָּאוֹר";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_4').innerHTML == "הָּאוֹר"){
      document.getElementById('divNum_40_1_4_2L1').innerHTML ="ha'or";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_4').innerHTML == "u'veyn"){
      document.getElementById('divNum_44_1_4_2L1').innerHTML ="וּבֵין";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_4').innerHTML == "וּבֵין"){
      document.getElementById('divNum_44_1_4_2L1').innerHTML ="u'veyn";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_4').innerHTML == "ha'hho'shekh"){
      document.getElementById('divNum_48_1_4_2L1').innerHTML ="הַחֹשֶךְ";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_4').innerHTML == "הַחֹשֶךְ"){
      document.getElementById('divNum_48_1_4_2L1').innerHTML ="ha'hho'shekh";
//functionName_cahpter_verse_line
switch_Heb_Translit_1_5_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_5').innerHTML == "wai'yiq'ra"){
      document.getElementById('divNum_4_1_5_1L1').innerHTML ="וַיִׁקְּרָּא";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_5').innerHTML == "וַיִׁקְּרָּא"){
      document.getElementById('divNum_4_1_5_1L1').innerHTML ="wai'yiq'ra";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_5').innerHTML == "e'lo'him"){
      document.getElementById('divNum_8_1_5_1L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_5').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_8_1_5_1L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_5').innerHTML == "la'or"){
      document.getElementById('divNum_12_1_5_1L1').innerHTML ="לָּאוֹר";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_5').innerHTML == "לָּאוֹר"){
      document.getElementById('divNum_12_1_5_1L1').innerHTML ="la'or";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_5').innerHTML == "yom"){
      document.getElementById('divNum_16_1_5_1L1').innerHTML ="יוֹם";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_5').innerHTML == "יוֹם"){
      document.getElementById('divNum_16_1_5_1L1').innerHTML ="yom";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_5').innerHTML == "wê'la'hho'shekh"){
      document.getElementById('divNum_20_1_5_1L1').innerHTML ="וְּלַחֹשֶךְ";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_5').innerHTML == "וְּלַחֹשֶךְ"){
      document.getElementById('divNum_20_1_5_1L1').innerHTML ="wê'la'hho'shekh";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_5').innerHTML == "qa'ra"){
      document.getElementById('divNum_24_1_5_1L1').innerHTML ="קָּרָּא";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_5').innerHTML == "קָּרָּא"){
      document.getElementById('divNum_24_1_5_1L1').innerHTML ="qa'ra";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_5').innerHTML == "lai'lah"){
      document.getElementById('divNum_28_1_5_1L1').innerHTML ="לָּיְּלָּה";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_5').innerHTML == "לָּיְּלָּה"){
      document.getElementById('divNum_28_1_5_1L1').innerHTML ="lai'lah";

} //End of switch_Heb_Translit_1_5_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_5_2(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_32_1_5').innerHTML == "wai'hi"){
      document.getElementById('divNum_32_1_5_2L1').innerHTML ="וַיְּהִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_32_1_5').innerHTML == "וַיְּהִׁי"){
      document.getElementById('divNum_32_1_5_2L1').innerHTML ="wai'hi";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_5').innerHTML == "e'rev"){
      document.getElementById('divNum_36_1_5_2L1').innerHTML ="עֶרֶב";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_5').innerHTML == "עֶרֶב"){
      document.getElementById('divNum_36_1_5_2L1').innerHTML ="e'rev";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_5').innerHTML == "wai'hi"){
      document.getElementById('divNum_40_1_5_2L1').innerHTML ="וַיְּהִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_5').innerHTML == "וַיְּהִׁי"){
      document.getElementById('divNum_40_1_5_2L1').innerHTML ="wai'hi";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_5').innerHTML == "vo'qer"){
      document.getElementById('divNum_44_1_5_2L1').innerHTML ="בֹקֶר";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_5').innerHTML == "בֹקֶר"){
      document.getElementById('divNum_44_1_5_2L1').innerHTML ="vo'qer";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_5').innerHTML == "yom"){
      document.getElementById('divNum_48_1_5_2L1').innerHTML ="יוֹם";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_5').innerHTML == "יוֹם"){
      document.getElementById('divNum_48_1_5_2L1').innerHTML ="yom";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_5').innerHTML == "e'hhad"){
      document.getElementById('divNum_52_1_5_2L1').innerHTML ="אֶחָּד";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_5').innerHTML == "אֶחָּד"){
      document.getElementById('divNum_52_1_5_2L1').innerHTML ="e'hhad";

} //End of switch_Heb_Translit_1_5_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_6_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_6').innerHTML == "wai'yo'mer"){
      document.getElementById('divNum_4_1_6_1L1').innerHTML ="וַיֹאמֶר";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_6').innerHTML == "וַיֹאמֶר"){
      document.getElementById('divNum_4_1_6_1L1').innerHTML ="wai'yo'mer";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_6').innerHTML == "e'lo'him"){
      document.getElementById('divNum_8_1_6_1L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_6').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_8_1_6_1L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_6').innerHTML == "yê'hi"){
      document.getElementById('divNum_12_1_6_1L1').innerHTML ="יְּהִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_6').innerHTML == "יְּהִׁי"){
      document.getElementById('divNum_12_1_6_1L1').innerHTML ="yê'hi";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_6').innerHTML == "ra'qi'a"){
      document.getElementById('divNum_16_1_6_1L1').innerHTML ="רָּקִׁיעַַ";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_6').innerHTML == "רָּקִׁיעַַ"){
      document.getElementById('divNum_16_1_6_1L1').innerHTML ="ra'qi'a";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_6').innerHTML == "bê'tokh"){
      document.getElementById('divNum_20_1_6_1L1').innerHTML ="בְּתוֹךְ";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_6').innerHTML == "בְּתוֹךְ"){
      document.getElementById('divNum_20_1_6_1L1').innerHTML ="bê'tokh";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_6').innerHTML == "ha'ma'yim"){
      document.getElementById('divNum_24_1_6_1L1').innerHTML ="הַמָּיִׁם";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_6').innerHTML == "הַמָּיִׁם"){
      document.getElementById('divNum_24_1_6_1L1').innerHTML ="ha'ma'yim";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_6').innerHTML == "wi'hi"){
      document.getElementById('divNum_28_1_6_1L1').innerHTML ="וִׁיהִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_6').innerHTML == "וִׁיהִׁי"){
      document.getElementById('divNum_28_1_6_1L1').innerHTML ="wi'hi";

} //End of switch_Heb_Translit_1_6_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_6_2(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_32_1_6').innerHTML == "mav'dil"){
      document.getElementById('divNum_32_1_6_2L1').innerHTML ="מַבְּדִׁיל";
    if( idElement == 1  &&  document.getElementById('divNum_32_1_6').innerHTML == "מַבְּדִׁיל"){
      document.getElementById('divNum_32_1_6_2L1').innerHTML ="mav'dil";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_6').innerHTML == "beyn"){
      document.getElementById('divNum_36_1_6_2L1').innerHTML ="בֵין";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_6').innerHTML == "בֵין"){
      document.getElementById('divNum_36_1_6_2L1').innerHTML ="beyn";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_6').innerHTML == "ma'yim"){
      document.getElementById('divNum_40_1_6_2L1').innerHTML ="מַיִׁם";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_6').innerHTML == "מַיִׁם"){
      document.getElementById('divNum_40_1_6_2L1').innerHTML ="ma'yim";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_6').innerHTML == "la'ma'yim"){
      document.getElementById('divNum_44_1_6_2L1').innerHTML ="לָּמָּיִׁם";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_6').innerHTML == "לָּמָּיִׁם"){
      document.getElementById('divNum_44_1_6_2L1').innerHTML ="la'ma'yim";

} //End of switch_Heb_Translit_1_6_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_7_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_7').innerHTML == "wai'ya'as"){
      document.getElementById('divNum_4_1_7_1L1').innerHTML ="וַיַעַשׂ";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_7').innerHTML == "וַיַעַשׂ"){
      document.getElementById('divNum_4_1_7_1L1').innerHTML ="wai'ya'as";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_7').innerHTML == "e'lo'him"){
      document.getElementById('divNum_8_1_7_1L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_7').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_8_1_7_1L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_7').innerHTML == "et"){
      document.getElementById('divNum_12_1_7_1L1').innerHTML ="אֶת";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_7').innerHTML == "אֶת"){
      document.getElementById('divNum_12_1_7_1L1').innerHTML ="et";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_7').innerHTML == "ha'ra'qi'a"){
      document.getElementById('divNum_16_1_7_1L1').innerHTML ="הָּרָּקִׁיעַַ";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_7').innerHTML == "הָּרָּקִׁיעַַ"){
      document.getElementById('divNum_16_1_7_1L1').innerHTML ="ha'ra'qi'a";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_7').innerHTML == "wai'yav'deyl"){
      document.getElementById('divNum_20_1_7_1L1').innerHTML ="וַיַבְּדֵל";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_7').innerHTML == "וַיַבְּדֵל"){
      document.getElementById('divNum_20_1_7_1L1').innerHTML ="wai'yav'deyl";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_7').innerHTML == "beyn"){
      document.getElementById('divNum_24_1_7_1L1').innerHTML ="בֵין";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_7').innerHTML == "בֵין"){
      document.getElementById('divNum_24_1_7_1L1').innerHTML ="beyn";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_7').innerHTML == "ha'ma'yim"){
      document.getElementById('divNum_28_1_7_1L1').innerHTML ="הַמַיִׁם";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_7').innerHTML == "הַמַיִׁם"){
      document.getElementById('divNum_28_1_7_1L1').innerHTML ="ha'ma'yim";

} //End of switch_Heb_Translit_1_7_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_7_2(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_32_1_7').innerHTML == "a'sher"){
      document.getElementById('divNum_32_1_7_2L1').innerHTML ="אֲשֶר";
    if( idElement == 1  &&  document.getElementById('divNum_32_1_7').innerHTML == "אֲשֶר"){
      document.getElementById('divNum_32_1_7_2L1').innerHTML ="a'sher";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_7').innerHTML == "mi'ta'hhat"){
      document.getElementById('divNum_36_1_7_2L1').innerHTML ="מִׁתַחַת";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_7').innerHTML == "מִׁתַחַת"){
      document.getElementById('divNum_36_1_7_2L1').innerHTML ="mi'ta'hhat";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_7').innerHTML == "la'ra'qi'a"){
      document.getElementById('divNum_40_1_7_2L1').innerHTML ="לָּרָּקִׁיעַַ";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_7').innerHTML == "לָּרָּקִׁיעַַ"){
      document.getElementById('divNum_40_1_7_2L1').innerHTML ="la'ra'qi'a";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_7').innerHTML == "u'veyn"){
      document.getElementById('divNum_44_1_7_2L1').innerHTML ="וּבֵין";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_7').innerHTML == "וּבֵין"){
      document.getElementById('divNum_44_1_7_2L1').innerHTML ="u'veyn";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_7').innerHTML == "ha'ma'yim"){
      document.getElementById('divNum_48_1_7_2L1').innerHTML ="הַמַיִׁם";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_7').innerHTML == "הַמַיִׁם"){
      document.getElementById('divNum_48_1_7_2L1').innerHTML ="ha'ma'yim";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_7').innerHTML == "a'sher"){
      document.getElementById('divNum_52_1_7_2L1').innerHTML ="אֲשֶר";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_7').innerHTML == "אֲשֶר"){
      document.getElementById('divNum_52_1_7_2L1').innerHTML ="a'sher";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_7').innerHTML == "mey'al"){
      document.getElementById('divNum_56_1_7_2L1').innerHTML ="מֵעַל";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_7').innerHTML == "מֵעַל"){
      document.getElementById('divNum_56_1_7_2L1').innerHTML ="mey'al";
    if( idElement == 1  &&  document.getElementById('divNum_60_1_7').innerHTML == "la'ra'qi'a"){
      document.getElementById('divNum_60_1_7_2L1').innerHTML ="לָּרָּקִׁיעַַ";
    if( idElement == 1  &&  document.getElementById('divNum_60_1_7').innerHTML == "לָּרָּקִׁיעַַ"){
      document.getElementById('divNum_60_1_7_2L1').innerHTML ="la'ra'qi'a";

} //End of switch_Heb_Translit_1_7_3function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_7_3(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_64_1_7').innerHTML == "wai'hi"){
      document.getElementById('divNum_64_1_7_3L1').innerHTML ="וַיְּהִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_64_1_7').innerHTML == "וַיְּהִׁי"){
      document.getElementById('divNum_64_1_7_3L1').innerHTML ="wai'hi";
    if( idElement == 1  &&  document.getElementById('divNum_68_1_7').innerHTML == "kheyn2"){
      document.getElementById('divNum_68_1_7_3L1').innerHTML ="כֵן";
    if( idElement == 1  &&  document.getElementById('divNum_68_1_7').innerHTML == "כֵן"){
      document.getElementById('divNum_68_1_7_3L1').innerHTML ="kheyn2";

} //End of switch_Heb_Translit_1_7_3function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_8_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_8').innerHTML == "wai'yiq'ra"){
      document.getElementById('divNum_4_1_8_1L1').innerHTML ="וַיִׁקְּרָּא";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_8').innerHTML == "וַיִׁקְּרָּא"){
      document.getElementById('divNum_4_1_8_1L1').innerHTML ="wai'yiq'ra";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_8').innerHTML == "e'lo'him"){
      document.getElementById('divNum_8_1_8_1L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_8').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_8_1_8_1L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_8').innerHTML == "la'ra'qi'a"){
      document.getElementById('divNum_12_1_8_1L1').innerHTML ="לָּרָּקִׁיעַַ";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_8').innerHTML == "לָּרָּקִׁיעַַ"){
      document.getElementById('divNum_12_1_8_1L1').innerHTML ="la'ra'qi'a";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_8').innerHTML == "sha'ma'yim"){
      document.getElementById('divNum_16_1_8_1L1').innerHTML ="שָּמָּיִׁם";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_8').innerHTML == "שָּמָּיִׁם"){
      document.getElementById('divNum_16_1_8_1L1').innerHTML ="sha'ma'yim";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_8').innerHTML == "wai'hi"){
      document.getElementById('divNum_20_1_8_1L1').innerHTML ="וַיְּהִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_8').innerHTML == "וַיְּהִׁי"){
      document.getElementById('divNum_20_1_8_1L1').innerHTML ="wai'hi";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_8').innerHTML == "e'rev"){
      document.getElementById('divNum_24_1_8_1L1').innerHTML ="עֶרֶב";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_8').innerHTML == "עֶרֶב"){
      document.getElementById('divNum_24_1_8_1L1').innerHTML ="e'rev";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_8').innerHTML == "wai'hi"){
      document.getElementById('divNum_28_1_8_1L1').innerHTML ="וַיְּהִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_8').innerHTML == "וַיְּהִׁי"){
      document.getElementById('divNum_28_1_8_1L1').innerHTML ="wai'hi";

} //End of switch_Heb_Translit_1_8_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_8_2(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_32_1_8').innerHTML == "vo'qer"){
      document.getElementById('divNum_32_1_8_2L1').innerHTML ="בֹקֶר";
    if( idElement == 1  &&  document.getElementById('divNum_32_1_8').innerHTML == "בֹקֶר"){
      document.getElementById('divNum_32_1_8_2L1').innerHTML ="vo'qer";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_8').innerHTML == "yom"){
      document.getElementById('divNum_36_1_8_2L1').innerHTML ="יוֹם";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_8').innerHTML == "יוֹם"){
      document.getElementById('divNum_36_1_8_2L1').innerHTML ="yom";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_8').innerHTML == "shey'ni"){
      document.getElementById('divNum_40_1_8_2L1').innerHTML ="שֵנִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_8').innerHTML == "שֵנִׁי"){
      document.getElementById('divNum_40_1_8_2L1').innerHTML ="shey'ni";
//functionName_cahpter_verse_line
switch_Heb_Translit_1_9_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_9').innerHTML == "wai'yo'mer"){
      document.getElementById('divNum_4_1_9_1L1').innerHTML ="וַיֹאמֶר";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_9').innerHTML == "וַיֹאמֶר"){
      document.getElementById('divNum_4_1_9_1L1').innerHTML ="wai'yo'mer";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_9').innerHTML == "e'lo'him"){
      document.getElementById('divNum_8_1_9_1L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_9').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_8_1_9_1L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_9').innerHTML == "yi'qaw'u"){
      document.getElementById('divNum_12_1_9_1L1').innerHTML ="יִׁקָּווּ";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_9').innerHTML == "יִׁקָּווּ"){
      document.getElementById('divNum_12_1_9_1L1').innerHTML ="yi'qaw'u";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_9').innerHTML == "ha'ma'yim"){
      document.getElementById('divNum_16_1_9_1L1').innerHTML ="הַמַיִׁם";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_9').innerHTML == "הַמַיִׁם"){
      document.getElementById('divNum_16_1_9_1L1').innerHTML ="ha'ma'yim";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_9').innerHTML == "mi'ta'hhat"){
      document.getElementById('divNum_20_1_9_1L1').innerHTML ="מִׁתַחַת";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_9').innerHTML == "מִׁתַחַת"){
      document.getElementById('divNum_20_1_9_1L1').innerHTML ="mi'ta'hhat";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_9').innerHTML == "ha'sha'ma'yim"){
      document.getElementById('divNum_24_1_9_1L1').innerHTML ="הַשָּמַיִׁם";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_9').innerHTML == "הַשָּמַיִׁם"){
      document.getElementById('divNum_24_1_9_1L1').innerHTML ="ha'sha'ma'yim";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_9').innerHTML == "el"){
      document.getElementById('divNum_28_1_9_1L1').innerHTML ="אֶל";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_9').innerHTML == "אֶל"){
      document.getElementById('divNum_28_1_9_1L1').innerHTML ="el";

} //End of switch_Heb_Translit_1_9_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_9_2(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_32_1_9').innerHTML == "ma'qom"){
      document.getElementById('divNum_32_1_9_2L1').innerHTML ="מָּקוֹם";
    if( idElement == 1  &&  document.getElementById('divNum_32_1_9').innerHTML == "מָּקוֹם"){
      document.getElementById('divNum_32_1_9_2L1').innerHTML ="ma'qom";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_9').innerHTML == "e'hhad"){
      document.getElementById('divNum_36_1_9_2L1').innerHTML ="אֶחָּד";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_9').innerHTML == "אֶחָּד"){
      document.getElementById('divNum_36_1_9_2L1').innerHTML ="e'hhad";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_9').innerHTML == "wê'tey'ra'eh"){
      document.getElementById('divNum_40_1_9_2L1').innerHTML ="וְּתֵרָּאֶה";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_9').innerHTML == "וְּתֵרָּאֶה"){
      document.getElementById('divNum_40_1_9_2L1').innerHTML ="wê'tey'ra'eh";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_9').innerHTML == "hai'ya'ba'shah"){
      document.getElementById('divNum_44_1_9_2L1').innerHTML ="הַיַבָּשָּה";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_9').innerHTML == "הַיַבָּשָּה"){
      document.getElementById('divNum_44_1_9_2L1').innerHTML ="hai'ya'ba'shah";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_9').innerHTML == "wai'hi"){
      document.getElementById('divNum_48_1_9_2L1').innerHTML ="וַיְּהִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_9').innerHTML == "וַיְּהִׁי"){
      document.getElementById('divNum_48_1_9_2L1').innerHTML ="wai'hi";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_9').innerHTML == "kheyn3"){
      document.getElementById('divNum_52_1_9_2L1').innerHTML ="כֵן";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_9').innerHTML == "כֵן"){
      document.getElementById('divNum_52_1_9_2L1').innerHTML ="kheyn3";

} //End of switch_Heb_Translit_1_9_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_10_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_10').innerHTML == "wai'yiq'ra"){
      document.getElementById('divNum_4_1_10_1L1').innerHTML ="וַיִׁקְּרָּא";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_10').innerHTML == "וַיִׁקְּרָּא"){
      document.getElementById('divNum_4_1_10_1L1').innerHTML ="wai'yiq'ra";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_10').innerHTML == "e'lo'him"){
      document.getElementById('divNum_8_1_10_1L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_10').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_8_1_10_1L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_10').innerHTML == "lai'ya'ba'shah"){
      document.getElementById('divNum_12_1_10_1L1').innerHTML ="לַיַבָּשָּה";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_10').innerHTML == "לַיַבָּשָּה"){
      document.getElementById('divNum_12_1_10_1L1').innerHTML ="lai'ya'ba'shah";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_10').innerHTML == "e'rets"){
      document.getElementById('divNum_16_1_10_1L1').innerHTML ="אֶרֶץ";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_10').innerHTML == "אֶרֶץ"){
      document.getElementById('divNum_16_1_10_1L1').innerHTML ="e'rets";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_10').innerHTML == "ul'miq'weh"){
      document.getElementById('divNum_20_1_10_1L1').innerHTML ="וּלְּמִׁקְּוֵה";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_10').innerHTML == "וּלְּמִׁקְּוֵה"){
      document.getElementById('divNum_20_1_10_1L1').innerHTML ="ul'miq'weh";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_10').innerHTML == "ha'ma'yim"){
      document.getElementById('divNum_24_1_10_1L1').innerHTML ="הַמַיִׁם";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_10').innerHTML == "הַמַיִׁם"){
      document.getElementById('divNum_24_1_10_1L1').innerHTML ="ha'ma'yim";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_10').innerHTML == "qa'ra"){
      document.getElementById('divNum_28_1_10_1L1').innerHTML ="קָּרָּא";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_10').innerHTML == "קָּרָּא"){
      document.getElementById('divNum_28_1_10_1L1').innerHTML ="qa'ra";

} //End of switch_Heb_Translit_1_10_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_10_2(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_32_1_10').innerHTML == "ya'mim"){
      document.getElementById('divNum_32_1_10_2L1').innerHTML ="יַמִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_32_1_10').innerHTML == "יַמִׁים"){
      document.getElementById('divNum_32_1_10_2L1').innerHTML ="ya'mim";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_10').innerHTML == "wai'yar"){
      document.getElementById('divNum_36_1_10_2L1').innerHTML ="וַיַרְּא";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_10').innerHTML == "וַיַרְּא"){
      document.getElementById('divNum_36_1_10_2L1').innerHTML ="wai'yar";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_10').innerHTML == "e'lo'him"){
      document.getElementById('divNum_40_1_10_2L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_10').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_40_1_10_2L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_10').innerHTML == "ki"){
      document.getElementById('divNum_44_1_10_2L1').innerHTML ="כִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_10').innerHTML == "כִׁי"){
      document.getElementById('divNum_44_1_10_2L1').innerHTML ="ki";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_10').innerHTML == "tov"){
      document.getElementById('divNum_48_1_10_2L1').innerHTML ="טוֹב";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_10').innerHTML == "טוֹב"){
      document.getElementById('divNum_48_1_10_2L1').innerHTML ="tov";

} //End of switch_Heb_Translit_1_10_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_11_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_11').innerHTML == "wai'yo'mer"){
      document.getElementById('divNum_4_1_11_1L1').innerHTML ="וַיֹאמֶר";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_11').innerHTML == "וַיֹאמֶר"){
      document.getElementById('divNum_4_1_11_1L1').innerHTML ="wai'yo'mer";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_11').innerHTML == "e'lo'him"){
      document.getElementById('divNum_8_1_11_1L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_11').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_8_1_11_1L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_11').innerHTML == "tad'shey"){
      document.getElementById('divNum_12_1_11_1L1').innerHTML ="תַדְּשֵא";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_11').innerHTML == "תַדְּשֵא"){
      document.getElementById('divNum_12_1_11_1L1').innerHTML ="tad'shey";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_11').innerHTML == "ha'a'rets"){
      document.getElementById('divNum_16_1_11_1L1').innerHTML ="הָּאָרֶץ";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_11').innerHTML == "הָּאָרֶץ"){
      document.getElementById('divNum_16_1_11_1L1').innerHTML ="ha'a'rets";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_11').innerHTML == "de'she"){
      document.getElementById('divNum_20_1_11_1L1').innerHTML ="דֶשֶא";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_11').innerHTML == "דֶשֶא"){
      document.getElementById('divNum_20_1_11_1L1').innerHTML ="de'she";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_11').innerHTML == "ey'sev"){
      document.getElementById('divNum_24_1_11_1L1').innerHTML ="עֵשֶׂב";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_11').innerHTML == "עֵשֶׂב"){
      document.getElementById('divNum_24_1_11_1L1').innerHTML ="ey'sev";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_11').innerHTML == "maz'ri'a"){
      document.getElementById('divNum_28_1_11_1L1').innerHTML ="מַזְּרִׁיעַַ";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_11').innerHTML == "מַזְּרִׁיעַַ"){
      document.getElementById('divNum_28_1_11_1L1').innerHTML ="maz'ri'a";

} //End of switch_Heb_Translit_1_11_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_11_2(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_32_1_11').innerHTML == "ze'ra"){
      document.getElementById('divNum_32_1_11_2L1').innerHTML ="זֶרַע";
    if( idElement == 1  &&  document.getElementById('divNum_32_1_11').innerHTML == "זֶרַע"){
      document.getElementById('divNum_32_1_11_2L1').innerHTML ="ze'ra";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_11').innerHTML == "eyts"){
      document.getElementById('divNum_36_1_11_2L1').innerHTML ="עֵץ";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_11').innerHTML == "עֵץ"){
      document.getElementById('divNum_36_1_11_2L1').innerHTML ="eyts";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_11').innerHTML == "pê'ri"){
      document.getElementById('divNum_40_1_11_2L1').innerHTML ="פְּרִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_11').innerHTML == "פְּרִׁי"){
      document.getElementById('divNum_40_1_11_2L1').innerHTML ="pê'ri";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_11').innerHTML == "o'seh"){
      document.getElementById('divNum_44_1_11_2L1').innerHTML ="עֹשֶׂה";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_11').innerHTML == "עֹשֶׂה"){
      document.getElementById('divNum_44_1_11_2L1').innerHTML ="o'seh";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_11').innerHTML == "pê'ri"){
      document.getElementById('divNum_48_1_11_2L1').innerHTML ="פְּרִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_11').innerHTML == "פְּרִׁי"){
      document.getElementById('divNum_48_1_11_2L1').innerHTML ="pê'ri";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_11').innerHTML == "lê'mi'no"){
      document.getElementById('divNum_52_1_11_2L1').innerHTML ="לְּמִׁינוַֹ";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_11').innerHTML == "לְּמִׁינוַֹ"){
      document.getElementById('divNum_52_1_11_2L1').innerHTML ="lê'mi'no";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_11').innerHTML == "a'sher"){
      document.getElementById('divNum_56_1_11_2L1').innerHTML ="אֲשֶר";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_11').innerHTML == "אֲשֶר"){
      document.getElementById('divNum_56_1_11_2L1').innerHTML ="a'sher";
    if( idElement == 1  &&  document.getElementById('divNum_60_1_11').innerHTML == "zar'o"){
      document.getElementById('divNum_60_1_11_2L1').innerHTML ="זַרְּעוַֹ";
    if( idElement == 1  &&  document.getElementById('divNum_60_1_11').innerHTML == "זַרְּעוַֹ"){
      document.getElementById('divNum_60_1_11_2L1').innerHTML ="zar'o";

} //End of switch_Heb_Translit_1_11_3function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_11_3(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_64_1_11').innerHTML == "UPON"){
      document.getElementById('divNum_64_1_11_3L1').innerHTML ="vo";
    if( idElement == 1  &&  document.getElementById('divNum_64_1_11').innerHTML == "vo"){
      document.getElementById('divNum_64_1_11_3L1').innerHTML ="UPON";
    if( idElement == 1  &&  document.getElementById('divNum_68_1_11').innerHTML == "the~LAND"){
      document.getElementById('divNum_68_1_11_3L1').innerHTML ="al";
    if( idElement == 1  &&  document.getElementById('divNum_68_1_11').innerHTML == "al"){
      document.getElementById('divNum_68_1_11_3L1').innerHTML ="the~LAND";
    if( idElement == 1  &&  document.getElementById('divNum_72_1_11').innerHTML == "and~he~will~EXIST(V)"){
      document.getElementById('divNum_72_1_11_3L1').innerHTML ="ha'a'rets";
    if( idElement == 1  &&  document.getElementById('divNum_72_1_11').innerHTML == "ha'a'rets"){
      document.getElementById('divNum_72_1_11_3L1').innerHTML ="and~he~will~EXIST(V)";
    if( idElement == 1  &&  document.getElementById('divNum_76_1_11').innerHTML == "SO"){
      document.getElementById('divNum_76_1_11_3L1').innerHTML ="wai'hi";
    if( idElement == 1  &&  document.getElementById('divNum_76_1_11').innerHTML == "wai'hi"){
      document.getElementById('divNum_76_1_11_3L1').innerHTML ="SO";

} //End of switch_Heb_Translit_1_11_3function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_12_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_12').innerHTML == "wa'to'tsey"){
      document.getElementById('divNum_4_1_12_1L1').innerHTML ="וַתוֹצֵא";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_12').innerHTML == "וַתוֹצֵא"){
      document.getElementById('divNum_4_1_12_1L1').innerHTML ="wa'to'tsey";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_12').innerHTML == "ha'a'rets"){
      document.getElementById('divNum_8_1_12_1L1').innerHTML ="הָּאָרֶץ";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_12').innerHTML == "הָּאָרֶץ"){
      document.getElementById('divNum_8_1_12_1L1').innerHTML ="ha'a'rets";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_12').innerHTML == "de'she"){
      document.getElementById('divNum_12_1_12_1L1').innerHTML ="דֶשֶא";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_12').innerHTML == "דֶשֶא"){
      document.getElementById('divNum_12_1_12_1L1').innerHTML ="de'she";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_12').innerHTML == "ey'sev"){
      document.getElementById('divNum_16_1_12_1L1').innerHTML ="עֵשֶׂב";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_12').innerHTML == "עֵשֶׂב"){
      document.getElementById('divNum_16_1_12_1L1').innerHTML ="ey'sev";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_12').innerHTML == "maz'ri'a"){
      document.getElementById('divNum_20_1_12_1L1').innerHTML ="מַזְּרִׁיעַַ";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_12').innerHTML == "מַזְּרִׁיעַַ"){
      document.getElementById('divNum_20_1_12_1L1').innerHTML ="maz'ri'a";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_12').innerHTML == "ze'ra"){
      document.getElementById('divNum_24_1_12_1L1').innerHTML ="זֶרַע";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_12').innerHTML == "זֶרַע"){
      document.getElementById('divNum_24_1_12_1L1').innerHTML ="ze'ra";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_12').innerHTML == "lê'mi'ney'hu"){
      document.getElementById('divNum_28_1_12_1L1').innerHTML ="לְּמִׁינֵהוּ";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_12').innerHTML == "לְּמִׁינֵהוּ"){
      document.getElementById('divNum_28_1_12_1L1').innerHTML ="lê'mi'ney'hu";

} //End of switch_Heb_Translit_1_12_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_12_2(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_32_1_12').innerHTML == "wê'eyts"){
      document.getElementById('divNum_32_1_12_2L1').innerHTML ="וְּעֵץ";
    if( idElement == 1  &&  document.getElementById('divNum_32_1_12').innerHTML == "וְּעֵץ"){
      document.getElementById('divNum_32_1_12_2L1').innerHTML ="wê'eyts";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_12').innerHTML == "o'seh"){
      document.getElementById('divNum_36_1_12_2L1').innerHTML ="עֹשֶׂה";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_12').innerHTML == "עֹשֶׂה"){
      document.getElementById('divNum_36_1_12_2L1').innerHTML ="o'seh";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_12').innerHTML == "pê'ri"){
      document.getElementById('divNum_40_1_12_2L1').innerHTML ="פְּרִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_12').innerHTML == "פְּרִׁי"){
      document.getElementById('divNum_40_1_12_2L1').innerHTML ="pê'ri";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_12').innerHTML == "a'sher"){
      document.getElementById('divNum_44_1_12_2L1').innerHTML ="אֲשֶר";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_12').innerHTML == "אֲשֶר"){
      document.getElementById('divNum_44_1_12_2L1').innerHTML ="a'sher";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_12').innerHTML == "zar'o"){
      document.getElementById('divNum_48_1_12_2L1').innerHTML ="זַרְּעוַֹ";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_12').innerHTML == "זַרְּעוַֹ"){
      document.getElementById('divNum_48_1_12_2L1').innerHTML ="zar'o";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_12').innerHTML == "to~KIND"){
      document.getElementById('divNum_52_1_12_2L1').innerHTML ="vo";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_12').innerHTML == "vo"){
      document.getElementById('divNum_52_1_12_2L1').innerHTML ="to~KIND";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_12').innerHTML == "and~he~will~SEE(V)"){
      document.getElementById('divNum_56_1_12_2L1').innerHTML ="lê'mi'ney'hu";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_12').innerHTML == "lê'mi'ney'hu"){
      document.getElementById('divNum_56_1_12_2L1').innerHTML ="and~he~will~SEE(V)";
    if( idElement == 1  &&  document.getElementById('divNum_60_1_12').innerHTML == "Elohiym"){
      document.getElementById('divNum_60_1_12_2L1').innerHTML ="wai'yar";
    if( idElement == 1  &&  document.getElementById('divNum_60_1_12').innerHTML == "wai'yar"){
      document.getElementById('divNum_60_1_12_2L1').innerHTML ="Elohiym";

} //End of switch_Heb_Translit_1_12_3function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_12_3(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_64_1_12').innerHTML == "GIVEN.THAT"){
      document.getElementById('divNum_64_1_12_3L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_64_1_12').innerHTML == "e'lo'him"){
      document.getElementById('divNum_64_1_12_3L1').innerHTML ="GIVEN.THAT";
    if( idElement == 1  &&  document.getElementById('divNum_68_1_12').innerHTML == "FUNCTIONAL"){
      document.getElementById('divNum_68_1_12_3L1').innerHTML ="ki";
    if( idElement == 1  &&  document.getElementById('divNum_68_1_12').innerHTML == "ki"){
      document.getElementById('divNum_68_1_12_3L1').innerHTML ="FUNCTIONAL";

} //End of switch_Heb_Translit_1_12_3function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_13_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_13').innerHTML == "wai'hi"){
      document.getElementById('divNum_4_1_13_1L1').innerHTML ="וַיְּהִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_13').innerHTML == "וַיְּהִׁי"){
      document.getElementById('divNum_4_1_13_1L1').innerHTML ="wai'hi";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_13').innerHTML == "e'rev"){
      document.getElementById('divNum_8_1_13_1L1').innerHTML ="עֶרֶב";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_13').innerHTML == "עֶרֶב"){
      document.getElementById('divNum_8_1_13_1L1').innerHTML ="e'rev";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_13').innerHTML == "wai'hi"){
      document.getElementById('divNum_12_1_13_1L1').innerHTML ="וַיְּהִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_13').innerHTML == "וַיְּהִׁי"){
      document.getElementById('divNum_12_1_13_1L1').innerHTML ="wai'hi";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_13').innerHTML == "vo'qer"){
      document.getElementById('divNum_16_1_13_1L1').innerHTML ="בֹקֶר";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_13').innerHTML == "בֹקֶר"){
      document.getElementById('divNum_16_1_13_1L1').innerHTML ="vo'qer";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_13').innerHTML == "yom"){
      document.getElementById('divNum_20_1_13_1L1').innerHTML ="יוֹם";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_13').innerHTML == "יוֹם"){
      document.getElementById('divNum_20_1_13_1L1').innerHTML ="yom";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_13').innerHTML == "shê'li'shi2"){
      document.getElementById('divNum_24_1_13_1L1').innerHTML ="שְּלִׁישִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_13').innerHTML == "שְּלִׁישִׁי"){
      document.getElementById('divNum_24_1_13_1L1').innerHTML ="shê'li'shi2";
//functionName_cahpter_verse_line
switch_Heb_Translit_1_14_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_14').innerHTML == "wai'yo'mer"){
      document.getElementById('divNum_4_1_14_1L1').innerHTML ="וַיֹאמֶר";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_14').innerHTML == "וַיֹאמֶר"){
      document.getElementById('divNum_4_1_14_1L1').innerHTML ="wai'yo'mer";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_14').innerHTML == "e'lo'him"){
      document.getElementById('divNum_8_1_14_1L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_14').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_8_1_14_1L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_14').innerHTML == "yê'hi"){
      document.getElementById('divNum_12_1_14_1L1').innerHTML ="יְּהִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_14').innerHTML == "יְּהִׁי"){
      document.getElementById('divNum_12_1_14_1L1').innerHTML ="yê'hi";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_14').innerHTML == "mê'o'rot"){
      document.getElementById('divNum_16_1_14_1L1').innerHTML ="מְּאֹרֹת";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_14').innerHTML == "מְּאֹרֹת"){
      document.getElementById('divNum_16_1_14_1L1').innerHTML ="mê'o'rot";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_14').innerHTML == "bir'qi'a"){
      document.getElementById('divNum_20_1_14_1L1').innerHTML ="בִׁרְּקִׁיעַַ";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_14').innerHTML == "בִׁרְּקִׁיעַַ"){
      document.getElementById('divNum_20_1_14_1L1').innerHTML ="bir'qi'a";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_14').innerHTML == "ha'sha'ma'yim"){
      document.getElementById('divNum_24_1_14_1L1').innerHTML ="הַשָּמַיִׁם";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_14').innerHTML == "הַשָּמַיִׁם"){
      document.getElementById('divNum_24_1_14_1L1').innerHTML ="ha'sha'ma'yim";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_14').innerHTML == "lê'hav'dil"){
      document.getElementById('divNum_28_1_14_1L1').innerHTML ="לְּהַבְּדִׁיל";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_14').innerHTML == "לְּהַבְּדִׁיל"){
      document.getElementById('divNum_28_1_14_1L1').innerHTML ="lê'hav'dil";

} //End of switch_Heb_Translit_1_14_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_14_2(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_32_1_14').innerHTML == "beyn"){
      document.getElementById('divNum_32_1_14_2L1').innerHTML ="בֵין";
    if( idElement == 1  &&  document.getElementById('divNum_32_1_14').innerHTML == "בֵין"){
      document.getElementById('divNum_32_1_14_2L1').innerHTML ="beyn";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_14').innerHTML == "hai'yom"){
      document.getElementById('divNum_36_1_14_2L1').innerHTML ="הַיוֹם";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_14').innerHTML == "הַיוֹם"){
      document.getElementById('divNum_36_1_14_2L1').innerHTML ="hai'yom";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_14').innerHTML == "u'veyn"){
      document.getElementById('divNum_40_1_14_2L1').innerHTML ="וּבֵין";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_14').innerHTML == "וּבֵין"){
      document.getElementById('divNum_40_1_14_2L1').innerHTML ="u'veyn";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_14').innerHTML == "ha'lai'lah"){
      document.getElementById('divNum_44_1_14_2L1').innerHTML ="הַלָּיְּלָּה";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_14').innerHTML == "הַלָּיְּלָּה"){
      document.getElementById('divNum_44_1_14_2L1').innerHTML ="ha'lai'lah";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_14').innerHTML == "wê'hai'u"){
      document.getElementById('divNum_48_1_14_2L1').innerHTML ="וְּהָּיוּ";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_14').innerHTML == "וְּהָּיוּ"){
      document.getElementById('divNum_48_1_14_2L1').innerHTML ="wê'hai'u";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_14').innerHTML == "lê'o'tot"){
      document.getElementById('divNum_52_1_14_2L1').innerHTML ="לְּאֹתֹת";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_14').innerHTML == "לְּאֹתֹת"){
      document.getElementById('divNum_52_1_14_2L1').innerHTML ="lê'o'tot";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_14').innerHTML == "ul'mo'a'dim"){
      document.getElementById('divNum_56_1_14_2L1').innerHTML ="וּלְּמוֹעֲדִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_14').innerHTML == "וּלְּמוֹעֲדִׁים"){
      document.getElementById('divNum_56_1_14_2L1').innerHTML ="ul'mo'a'dim";
    if( idElement == 1  &&  document.getElementById('divNum_60_1_14').innerHTML == "ul'ya'mim"){
      document.getElementById('divNum_60_1_14_2L1').innerHTML ="וּלְּיָּמִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_60_1_14').innerHTML == "וּלְּיָּמִׁים"){
      document.getElementById('divNum_60_1_14_2L1').innerHTML ="ul'ya'mim";

} //End of switch_Heb_Translit_1_14_3function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_14_3(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_64_1_14').innerHTML == "wê'sha'nim"){
      document.getElementById('divNum_64_1_14_3L1').innerHTML ="וְּשָּנִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_64_1_14').innerHTML == "וְּשָּנִׁים"){
      document.getElementById('divNum_64_1_14_3L1').innerHTML ="wê'sha'nim";
//functionName_cahpter_verse_line
switch_Heb_Translit_1_15_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_15').innerHTML == "wê'hai'u"){
      document.getElementById('divNum_4_1_15_1L1').innerHTML ="וְּהָּיוּ";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_15').innerHTML == "וְּהָּיוּ"){
      document.getElementById('divNum_4_1_15_1L1').innerHTML ="wê'hai'u";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_15').innerHTML == "lim'o'rot"){
      document.getElementById('divNum_8_1_15_1L1').innerHTML ="לִׁמְּאוֹרֹת";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_15').innerHTML == "לִׁמְּאוֹרֹת"){
      document.getElementById('divNum_8_1_15_1L1').innerHTML ="lim'o'rot";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_15').innerHTML == "bir'qi'a"){
      document.getElementById('divNum_12_1_15_1L1').innerHTML ="בִׁרְּקִׁיעַַ";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_15').innerHTML == "בִׁרְּקִׁיעַַ"){
      document.getElementById('divNum_12_1_15_1L1').innerHTML ="bir'qi'a";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_15').innerHTML == "ha'sha'ma'yim"){
      document.getElementById('divNum_16_1_15_1L1').innerHTML ="הַשָּמַיִׁם";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_15').innerHTML == "הַשָּמַיִׁם"){
      document.getElementById('divNum_16_1_15_1L1').innerHTML ="ha'sha'ma'yim";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_15').innerHTML == "lê'ha'ir"){
      document.getElementById('divNum_20_1_15_1L1').innerHTML ="לְּהָּאִׁיר";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_15').innerHTML == "לְּהָּאִׁיר"){
      document.getElementById('divNum_20_1_15_1L1').innerHTML ="lê'ha'ir";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_15').innerHTML == "al"){
      document.getElementById('divNum_24_1_15_1L1').innerHTML ="עַל";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_15').innerHTML == "עַל"){
      document.getElementById('divNum_24_1_15_1L1').innerHTML ="al";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_15').innerHTML == "ha'a'rets"){
      document.getElementById('divNum_28_1_15_1L1').innerHTML ="הָּאָרֶץ";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_15').innerHTML == "הָּאָרֶץ"){
      document.getElementById('divNum_28_1_15_1L1').innerHTML ="ha'a'rets";

} //End of switch_Heb_Translit_1_15_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_15_2(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_32_1_15').innerHTML == "wai'hi"){
      document.getElementById('divNum_32_1_15_2L1').innerHTML ="וַיְּהִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_32_1_15').innerHTML == "וַיְּהִׁי"){
      document.getElementById('divNum_32_1_15_2L1').innerHTML ="wai'hi";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_15').innerHTML == "kheyn3"){
      document.getElementById('divNum_36_1_15_2L1').innerHTML ="כֵן";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_15').innerHTML == "כֵן"){
      document.getElementById('divNum_36_1_15_2L1').innerHTML ="kheyn3";

} //End of switch_Heb_Translit_1_15_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_16_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_16').innerHTML == "wai'ya'as"){
      document.getElementById('divNum_4_1_16_1L1').innerHTML ="וַיַעַשׂ";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_16').innerHTML == "וַיַעַשׂ"){
      document.getElementById('divNum_4_1_16_1L1').innerHTML ="wai'ya'as";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_16').innerHTML == "e'lo'him"){
      document.getElementById('divNum_8_1_16_1L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_16').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_8_1_16_1L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_16').innerHTML == "et"){
      document.getElementById('divNum_12_1_16_1L1').innerHTML ="אֶת";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_16').innerHTML == "אֶת"){
      document.getElementById('divNum_12_1_16_1L1').innerHTML ="et";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_16').innerHTML == "shê'ney"){
      document.getElementById('divNum_16_1_16_1L1').innerHTML ="שְּנֵי";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_16').innerHTML == "שְּנֵי"){
      document.getElementById('divNum_16_1_16_1L1').innerHTML ="shê'ney";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_16').innerHTML == "ham'o'rot"){
      document.getElementById('divNum_20_1_16_1L1').innerHTML ="הַמְּאֹרֹת";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_16').innerHTML == "הַמְּאֹרֹת"){
      document.getElementById('divNum_20_1_16_1L1').innerHTML ="ham'o'rot";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_16').innerHTML == "ha'ge'do'lim"){
      document.getElementById('divNum_24_1_16_1L1').innerHTML ="הַגְּדֹלִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_16').innerHTML == "הַגְּדֹלִׁים"){
      document.getElementById('divNum_24_1_16_1L1').innerHTML ="ha'ge'do'lim";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_16').innerHTML == "et"){
      document.getElementById('divNum_28_1_16_1L1').innerHTML ="אֶת";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_16').innerHTML == "אֶת"){
      document.getElementById('divNum_28_1_16_1L1').innerHTML ="et";

} //End of switch_Heb_Translit_1_16_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_16_2(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_32_1_16').innerHTML == "ha'ma'or"){
      document.getElementById('divNum_32_1_16_2L1').innerHTML ="הַמָּאוֹר";
    if( idElement == 1  &&  document.getElementById('divNum_32_1_16').innerHTML == "הַמָּאוֹר"){
      document.getElementById('divNum_32_1_16_2L1').innerHTML ="ha'ma'or";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_16').innerHTML == "ha'ga'dol"){
      document.getElementById('divNum_36_1_16_2L1').innerHTML ="הַגָּדֹל";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_16').innerHTML == "הַגָּדֹל"){
      document.getElementById('divNum_36_1_16_2L1').innerHTML ="ha'ga'dol";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_16').innerHTML == "lê'mem'she'let"){
      document.getElementById('divNum_40_1_16_2L1').innerHTML ="לְּמֶמְּשֶלֶת";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_16').innerHTML == "לְּמֶמְּשֶלֶת"){
      document.getElementById('divNum_40_1_16_2L1').innerHTML ="lê'mem'she'let";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_16').innerHTML == "hai'yom"){
      document.getElementById('divNum_44_1_16_2L1').innerHTML ="הַיוֹם";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_16').innerHTML == "הַיוֹם"){
      document.getElementById('divNum_44_1_16_2L1').innerHTML ="hai'yom";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_16').innerHTML == "wê'et"){
      document.getElementById('divNum_48_1_16_2L1').innerHTML ="וְּאֶת";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_16').innerHTML == "וְּאֶת"){
      document.getElementById('divNum_48_1_16_2L1').innerHTML ="wê'et";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_16').innerHTML == "ha'ma'or"){
      document.getElementById('divNum_52_1_16_2L1').innerHTML ="הַמָּאוֹר";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_16').innerHTML == "הַמָּאוֹר"){
      document.getElementById('divNum_52_1_16_2L1').innerHTML ="ha'ma'or";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_16').innerHTML == "ha'qa'ton"){
      document.getElementById('divNum_56_1_16_2L1').innerHTML ="הַקָּטֹן";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_16').innerHTML == "הַקָּטֹן"){
      document.getElementById('divNum_56_1_16_2L1').innerHTML ="ha'qa'ton";
    if( idElement == 1  &&  document.getElementById('divNum_60_1_16').innerHTML == "lê'mem'she'let"){
      document.getElementById('divNum_60_1_16_2L1').innerHTML ="לְּמֶמְּשֶלֶת";
    if( idElement == 1  &&  document.getElementById('divNum_60_1_16').innerHTML == "לְּמֶמְּשֶלֶת"){
      document.getElementById('divNum_60_1_16_2L1').innerHTML ="lê'mem'she'let";

} //End of switch_Heb_Translit_1_16_3function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_16_3(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_64_1_16').innerHTML == "ha'lai'lah"){
      document.getElementById('divNum_64_1_16_3L1').innerHTML ="הַלַיְּלָּה";
    if( idElement == 1  &&  document.getElementById('divNum_64_1_16').innerHTML == "הַלַיְּלָּה"){
      document.getElementById('divNum_64_1_16_3L1').innerHTML ="ha'lai'lah";
    if( idElement == 1  &&  document.getElementById('divNum_68_1_16').innerHTML == "wê'eyt"){
      document.getElementById('divNum_68_1_16_3L1').innerHTML ="וְּאֵת";
    if( idElement == 1  &&  document.getElementById('divNum_68_1_16').innerHTML == "וְּאֵת"){
      document.getElementById('divNum_68_1_16_3L1').innerHTML ="wê'eyt";
    if( idElement == 1  &&  document.getElementById('divNum_72_1_16').innerHTML == "ha'ko'kha'vim4"){
      document.getElementById('divNum_72_1_16_3L1').innerHTML ="הַכוֹכָּבִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_72_1_16').innerHTML == "הַכוֹכָּבִׁים"){
      document.getElementById('divNum_72_1_16_3L1').innerHTML ="ha'ko'kha'vim4";
//functionName_cahpter_verse_line
switch_Heb_Translit_1_17_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_17').innerHTML == "wai'yi'teyn"){
      document.getElementById('divNum_4_1_17_1L1').innerHTML ="וַיִׁתֵן";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_17').innerHTML == "וַיִׁתֵן"){
      document.getElementById('divNum_4_1_17_1L1').innerHTML ="wai'yi'teyn";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_17').innerHTML == "o'tam"){
      document.getElementById('divNum_8_1_17_1L1').innerHTML ="אֹתָּם";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_17').innerHTML == "אֹתָּם"){
      document.getElementById('divNum_8_1_17_1L1').innerHTML ="o'tam";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_17').innerHTML == "e'lo'him"){
      document.getElementById('divNum_12_1_17_1L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_17').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_12_1_17_1L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_17').innerHTML == "bir'qi'a"){
      document.getElementById('divNum_16_1_17_1L1').innerHTML ="בִׁרְּקִׁיעַַ";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_17').innerHTML == "בִׁרְּקִׁיעַַ"){
      document.getElementById('divNum_16_1_17_1L1').innerHTML ="bir'qi'a";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_17').innerHTML == "ha'sha'ma'yim"){
      document.getElementById('divNum_20_1_17_1L1').innerHTML ="הַשָּמָּיִׁם";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_17').innerHTML == "הַשָּמָּיִׁם"){
      document.getElementById('divNum_20_1_17_1L1').innerHTML ="ha'sha'ma'yim";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_17').innerHTML == "lê'ha'ir"){
      document.getElementById('divNum_24_1_17_1L1').innerHTML ="לְּהָּאִׁיר";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_17').innerHTML == "לְּהָּאִׁיר"){
      document.getElementById('divNum_24_1_17_1L1').innerHTML ="lê'ha'ir";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_17').innerHTML == "al"){
      document.getElementById('divNum_28_1_17_1L1').innerHTML ="עַל";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_17').innerHTML == "עַל"){
      document.getElementById('divNum_28_1_17_1L1').innerHTML ="al";

} //End of switch_Heb_Translit_1_17_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_17_2(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_32_1_17').innerHTML == "ha'a'rets"){
      document.getElementById('divNum_32_1_17_2L1').innerHTML ="הָּאָרֶץ";
    if( idElement == 1  &&  document.getElementById('divNum_32_1_17').innerHTML == "הָּאָרֶץ"){
      document.getElementById('divNum_32_1_17_2L1').innerHTML ="ha'a'rets";
//functionName_cahpter_verse_line
switch_Heb_Translit_1_18_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_18').innerHTML == "wê'lim'shol"){
      document.getElementById('divNum_4_1_18_1L1').innerHTML ="וְּלִׁמְּשֹל";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_18').innerHTML == "וְּלִׁמְּשֹל"){
      document.getElementById('divNum_4_1_18_1L1').innerHTML ="wê'lim'shol";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_18').innerHTML == "ba'yom"){
      document.getElementById('divNum_8_1_18_1L1').innerHTML ="בַיוֹם";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_18').innerHTML == "בַיוֹם"){
      document.getElementById('divNum_8_1_18_1L1').innerHTML ="ba'yom";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_18').innerHTML == "u'va'lai'lah"){
      document.getElementById('divNum_12_1_18_1L1').innerHTML ="וּבַלַיְּלָּה";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_18').innerHTML == "וּבַלַיְּלָּה"){
      document.getElementById('divNum_12_1_18_1L1').innerHTML ="u'va'lai'lah";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_18').innerHTML == "ul'hav'dil"){
      document.getElementById('divNum_16_1_18_1L1').innerHTML ="וּלְּהַבְּדִׁיל";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_18').innerHTML == "וּלְּהַבְּדִׁיל"){
      document.getElementById('divNum_16_1_18_1L1').innerHTML ="ul'hav'dil";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_18').innerHTML == "beyn"){
      document.getElementById('divNum_20_1_18_1L1').innerHTML ="בֵין";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_18').innerHTML == "בֵין"){
      document.getElementById('divNum_20_1_18_1L1').innerHTML ="beyn";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_18').innerHTML == "ha'or"){
      document.getElementById('divNum_24_1_18_1L1').innerHTML ="הָּאוֹר";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_18').innerHTML == "הָּאוֹר"){
      document.getElementById('divNum_24_1_18_1L1').innerHTML ="ha'or";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_18').innerHTML == "u'veyn"){
      document.getElementById('divNum_28_1_18_1L1').innerHTML ="וּבֵין";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_18').innerHTML == "וּבֵין"){
      document.getElementById('divNum_28_1_18_1L1').innerHTML ="u'veyn";

} //End of switch_Heb_Translit_1_18_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_18_2(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_32_1_18').innerHTML == "ha'hho'shekh"){
      document.getElementById('divNum_32_1_18_2L1').innerHTML ="הַחֹשֶךְ";
    if( idElement == 1  &&  document.getElementById('divNum_32_1_18').innerHTML == "הַחֹשֶךְ"){
      document.getElementById('divNum_32_1_18_2L1').innerHTML ="ha'hho'shekh";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_18').innerHTML == "wai'yar"){
      document.getElementById('divNum_36_1_18_2L1').innerHTML ="וַיַרְּא";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_18').innerHTML == "וַיַרְּא"){
      document.getElementById('divNum_36_1_18_2L1').innerHTML ="wai'yar";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_18').innerHTML == "e'lo'him"){
      document.getElementById('divNum_40_1_18_2L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_18').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_40_1_18_2L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_18').innerHTML == "ki"){
      document.getElementById('divNum_44_1_18_2L1').innerHTML ="כִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_18').innerHTML == "כִׁי"){
      document.getElementById('divNum_44_1_18_2L1').innerHTML ="ki";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_18').innerHTML == "tov"){
      document.getElementById('divNum_48_1_18_2L1').innerHTML ="טוֹב";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_18').innerHTML == "טוֹב"){
      document.getElementById('divNum_48_1_18_2L1').innerHTML ="tov";
//functionName_cahpter_verse_line
switch_Heb_Translit_1_19_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_19').innerHTML == "wai'hi"){
      document.getElementById('divNum_4_1_19_1L1').innerHTML ="וַיְּהִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_19').innerHTML == "וַיְּהִׁי"){
      document.getElementById('divNum_4_1_19_1L1').innerHTML ="wai'hi";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_19').innerHTML == "e'rev"){
      document.getElementById('divNum_8_1_19_1L1').innerHTML ="עֶרֶב";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_19').innerHTML == "עֶרֶב"){
      document.getElementById('divNum_8_1_19_1L1').innerHTML ="e'rev";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_19').innerHTML == "wai'hi"){
      document.getElementById('divNum_12_1_19_1L1').innerHTML ="וַיְּהִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_19').innerHTML == "וַיְּהִׁי"){
      document.getElementById('divNum_12_1_19_1L1').innerHTML ="wai'hi";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_19').innerHTML == "vo'qer"){
      document.getElementById('divNum_16_1_19_1L1').innerHTML ="בֹקֶר";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_19').innerHTML == "בֹקֶר"){
      document.getElementById('divNum_16_1_19_1L1').innerHTML ="vo'qer";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_19').innerHTML == "yom"){
      document.getElementById('divNum_20_1_19_1L1').innerHTML ="יוֹם";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_19').innerHTML == "יוֹם"){
      document.getElementById('divNum_20_1_19_1L1').innerHTML ="yom";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_19').innerHTML == "rê'vi'i"){
      document.getElementById('divNum_24_1_19_1L1').innerHTML ="רְּבִׁיעִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_19').innerHTML == "רְּבִׁיעִׁי"){
      document.getElementById('divNum_24_1_19_1L1').innerHTML ="rê'vi'i";
//functionName_cahpter_verse_line
switch_Heb_Translit_1_20_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_20').innerHTML == "wai'yo'mer"){
      document.getElementById('divNum_4_1_20_1L1').innerHTML ="וַיֹאמֶר";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_20').innerHTML == "וַיֹאמֶר"){
      document.getElementById('divNum_4_1_20_1L1').innerHTML ="wai'yo'mer";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_20').innerHTML == "e'lo'him"){
      document.getElementById('divNum_8_1_20_1L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_20').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_8_1_20_1L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_20').innerHTML == "yish're'tsu"){
      document.getElementById('divNum_12_1_20_1L1').innerHTML ="יִׁשְּרְּצוּ";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_20').innerHTML == "יִׁשְּרְּצוּ"){
      document.getElementById('divNum_12_1_20_1L1').innerHTML ="yish're'tsu";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_20').innerHTML == "ha'ma'yim"){
      document.getElementById('divNum_16_1_20_1L1').innerHTML ="הַמַיִׁם";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_20').innerHTML == "הַמַיִׁם"){
      document.getElementById('divNum_16_1_20_1L1').innerHTML ="ha'ma'yim";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_20').innerHTML == "she'rets"){
      document.getElementById('divNum_20_1_20_1L1').innerHTML ="שֶרֶץ";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_20').innerHTML == "שֶרֶץ"){
      document.getElementById('divNum_20_1_20_1L1').innerHTML ="she'rets";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_20').innerHTML == "ne'phesh"){
      document.getElementById('divNum_24_1_20_1L1').innerHTML ="נֶפֶש";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_20').innerHTML == "נֶפֶש"){
      document.getElementById('divNum_24_1_20_1L1').innerHTML ="ne'phesh";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_20').innerHTML == "hhai'yah"){
      document.getElementById('divNum_28_1_20_1L1').innerHTML ="חַיָּה";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_20').innerHTML == "חַיָּה"){
      document.getElementById('divNum_28_1_20_1L1').innerHTML ="hhai'yah";

} //End of switch_Heb_Translit_1_20_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_20_2(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_32_1_20').innerHTML == "wê'oph"){
      document.getElementById('divNum_32_1_20_2L1').innerHTML ="וְּעוֹף";
    if( idElement == 1  &&  document.getElementById('divNum_32_1_20').innerHTML == "וְּעוֹף"){
      document.getElementById('divNum_32_1_20_2L1').innerHTML ="wê'oph";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_20').innerHTML == "yê'o'pheyph"){
      document.getElementById('divNum_36_1_20_2L1').innerHTML ="יְּעוֹפֵף";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_20').innerHTML == "יְּעוֹפֵף"){
      document.getElementById('divNum_36_1_20_2L1').innerHTML ="yê'o'pheyph";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_20').innerHTML == "al"){
      document.getElementById('divNum_40_1_20_2L1').innerHTML ="עַל";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_20').innerHTML == "עַל"){
      document.getElementById('divNum_40_1_20_2L1').innerHTML ="al";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_20').innerHTML == "ha'a'rets"){
      document.getElementById('divNum_44_1_20_2L1').innerHTML ="הָּאָרֶץ";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_20').innerHTML == "הָּאָרֶץ"){
      document.getElementById('divNum_44_1_20_2L1').innerHTML ="ha'a'rets";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_20').innerHTML == "al"){
      document.getElementById('divNum_48_1_20_2L1').innerHTML ="עַל";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_20').innerHTML == "עַל"){
      document.getElementById('divNum_48_1_20_2L1').innerHTML ="al";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_20').innerHTML == "pê'ney"){
      document.getElementById('divNum_52_1_20_2L1').innerHTML ="פְּנֵי";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_20').innerHTML == "פְּנֵי"){
      document.getElementById('divNum_52_1_20_2L1').innerHTML ="pê'ney";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_20').innerHTML == "rê'qi'a"){
      document.getElementById('divNum_56_1_20_2L1').innerHTML ="רְּקִׁיעַַ";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_20').innerHTML == "רְּקִׁיעַַ"){
      document.getElementById('divNum_56_1_20_2L1').innerHTML ="rê'qi'a";
    if( idElement == 1  &&  document.getElementById('divNum_60_1_20').innerHTML == "ha'sha'ma'yim"){
      document.getElementById('divNum_60_1_20_2L1').innerHTML ="הַשָּמָּיִׁם";
    if( idElement == 1  &&  document.getElementById('divNum_60_1_20').innerHTML == "הַשָּמָּיִׁם"){
      document.getElementById('divNum_60_1_20_2L1').innerHTML ="ha'sha'ma'yim";

} //End of switch_Heb_Translit_1_20_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_21_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_21').innerHTML == "wai'yiv'ra"){
      document.getElementById('divNum_4_1_21_1L1').innerHTML ="וַיִׁבְּרָּא";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_21').innerHTML == "וַיִׁבְּרָּא"){
      document.getElementById('divNum_4_1_21_1L1').innerHTML ="wai'yiv'ra";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_21').innerHTML == "e'lo'him"){
      document.getElementById('divNum_8_1_21_1L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_21').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_8_1_21_1L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_21').innerHTML == "et"){
      document.getElementById('divNum_12_1_21_1L1').innerHTML ="אֶת";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_21').innerHTML == "אֶת"){
      document.getElementById('divNum_12_1_21_1L1').innerHTML ="et";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_21').innerHTML == "ha'ta'ni'nim1"){
      document.getElementById('divNum_16_1_21_1L1').innerHTML ="הַתַנִׁינִׁם";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_21').innerHTML == "הַתַנִׁינִׁם"){
      document.getElementById('divNum_16_1_21_1L1').innerHTML ="ha'ta'ni'nim1";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_21').innerHTML == "ha'ge'do'lim"){
      document.getElementById('divNum_20_1_21_1L1').innerHTML ="הַגְּדֹלִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_21').innerHTML == "הַגְּדֹלִׁים"){
      document.getElementById('divNum_20_1_21_1L1').innerHTML ="ha'ge'do'lim";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_21').innerHTML == "wê'eyt"){
      document.getElementById('divNum_24_1_21_1L1').innerHTML ="וְּאֵת";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_21').innerHTML == "וְּאֵת"){
      document.getElementById('divNum_24_1_21_1L1').innerHTML ="wê'eyt";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_21').innerHTML == "kol"){
      document.getElementById('divNum_28_1_21_1L1').innerHTML ="כָּל";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_21').innerHTML == "כָּל"){
      document.getElementById('divNum_28_1_21_1L1').innerHTML ="kol";

} //End of switch_Heb_Translit_1_21_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_21_2(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_32_1_21').innerHTML == "ne'phesh"){
      document.getElementById('divNum_32_1_21_2L1').innerHTML ="נֶפֶש";
    if( idElement == 1  &&  document.getElementById('divNum_32_1_21').innerHTML == "נֶפֶש"){
      document.getElementById('divNum_32_1_21_2L1').innerHTML ="ne'phesh";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_21').innerHTML == "ha'hha'yah"){
      document.getElementById('divNum_36_1_21_2L1').innerHTML ="הַחַיָּה";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_21').innerHTML == "הַחַיָּה"){
      document.getElementById('divNum_36_1_21_2L1').innerHTML ="ha'hha'yah";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_21').innerHTML == "ha'ro'me'set"){
      document.getElementById('divNum_40_1_21_2L1').innerHTML ="הָּרֹמֶשֶׂת";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_21').innerHTML == "הָּרֹמֶשֶׂת"){
      document.getElementById('divNum_40_1_21_2L1').innerHTML ="ha'ro'me'set";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_21').innerHTML == "a'sher"){
      document.getElementById('divNum_44_1_21_2L1').innerHTML ="אֲשֶר";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_21').innerHTML == "אֲשֶר"){
      document.getElementById('divNum_44_1_21_2L1').innerHTML ="a'sher";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_21').innerHTML == "shar'tsu"){
      document.getElementById('divNum_48_1_21_2L1').innerHTML ="שָּרְּצוּ";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_21').innerHTML == "שָּרְּצוּ"){
      document.getElementById('divNum_48_1_21_2L1').innerHTML ="shar'tsu";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_21').innerHTML == "ha'ma'yim"){
      document.getElementById('divNum_52_1_21_2L1').innerHTML ="הַמַיִׁם";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_21').innerHTML == "הַמַיִׁם"){
      document.getElementById('divNum_52_1_21_2L1').innerHTML ="ha'ma'yim";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_21').innerHTML == "lê'mi'ney'hem"){
      document.getElementById('divNum_56_1_21_2L1').innerHTML ="לְּמִׁינֵהֶם";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_21').innerHTML == "לְּמִׁינֵהֶם"){
      document.getElementById('divNum_56_1_21_2L1').innerHTML ="lê'mi'ney'hem";
    if( idElement == 1  &&  document.getElementById('divNum_60_1_21').innerHTML == "wê'eyt"){
      document.getElementById('divNum_60_1_21_2L1').innerHTML ="וְּאֵת";
    if( idElement == 1  &&  document.getElementById('divNum_60_1_21').innerHTML == "וְּאֵת"){
      document.getElementById('divNum_60_1_21_2L1').innerHTML ="wê'eyt";

} //End of switch_Heb_Translit_1_21_3function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_21_3(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_64_1_21').innerHTML == "kol"){
      document.getElementById('divNum_64_1_21_3L1').innerHTML ="כָּל";
    if( idElement == 1  &&  document.getElementById('divNum_64_1_21').innerHTML == "כָּל"){
      document.getElementById('divNum_64_1_21_3L1').innerHTML ="kol";
    if( idElement == 1  &&  document.getElementById('divNum_68_1_21').innerHTML == "oph"){
      document.getElementById('divNum_68_1_21_3L1').innerHTML ="עוֹף";
    if( idElement == 1  &&  document.getElementById('divNum_68_1_21').innerHTML == "עוֹף"){
      document.getElementById('divNum_68_1_21_3L1').innerHTML ="oph";
    if( idElement == 1  &&  document.getElementById('divNum_72_1_21').innerHTML == "ka'naph"){
      document.getElementById('divNum_72_1_21_3L1').innerHTML ="כָּנָּף";
    if( idElement == 1  &&  document.getElementById('divNum_72_1_21').innerHTML == "כָּנָּף"){
      document.getElementById('divNum_72_1_21_3L1').innerHTML ="ka'naph";
    if( idElement == 1  &&  document.getElementById('divNum_76_1_21').innerHTML == "lê'mi'ney'hu"){
      document.getElementById('divNum_76_1_21_3L1').innerHTML ="לְּמִׁינֵהוּ";
    if( idElement == 1  &&  document.getElementById('divNum_76_1_21').innerHTML == "לְּמִׁינֵהוּ"){
      document.getElementById('divNum_76_1_21_3L1').innerHTML ="lê'mi'ney'hu";
    if( idElement == 1  &&  document.getElementById('divNum_80_1_21').innerHTML == "wai'yar"){
      document.getElementById('divNum_80_1_21_3L1').innerHTML ="וַיַרְּא";
    if( idElement == 1  &&  document.getElementById('divNum_80_1_21').innerHTML == "וַיַרְּא"){
      document.getElementById('divNum_80_1_21_3L1').innerHTML ="wai'yar";
    if( idElement == 1  &&  document.getElementById('divNum_84_1_21').innerHTML == "e'lo'him"){
      document.getElementById('divNum_84_1_21_3L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_84_1_21').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_84_1_21_3L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_88_1_21').innerHTML == "ki"){
      document.getElementById('divNum_88_1_21_3L1').innerHTML ="כִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_88_1_21').innerHTML == "כִׁי"){
      document.getElementById('divNum_88_1_21_3L1').innerHTML ="ki";
    if( idElement == 1  &&  document.getElementById('divNum_92_1_21').innerHTML == "tov"){
      document.getElementById('divNum_92_1_21_3L1').innerHTML ="טוֹב";
    if( idElement == 1  &&  document.getElementById('divNum_92_1_21').innerHTML == "טוֹב"){
      document.getElementById('divNum_92_1_21_3L1').innerHTML ="tov";

} //End of switch_Heb_Translit_1_21_3function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_22_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_22').innerHTML == "wai'va'rekh"){
      document.getElementById('divNum_4_1_22_1L1').innerHTML ="וַיְּבָּרֶךְ";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_22').innerHTML == "וַיְּבָּרֶךְ"){
      document.getElementById('divNum_4_1_22_1L1').innerHTML ="wai'va'rekh";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_22').innerHTML == "o'tam"){
      document.getElementById('divNum_8_1_22_1L1').innerHTML ="אֹתָּם";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_22').innerHTML == "אֹתָּם"){
      document.getElementById('divNum_8_1_22_1L1').innerHTML ="o'tam";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_22').innerHTML == "e'lo'him"){
      document.getElementById('divNum_12_1_22_1L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_22').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_12_1_22_1L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_22').innerHTML == "ley'mor"){
      document.getElementById('divNum_16_1_22_1L1').innerHTML ="לֵאמֹר";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_22').innerHTML == "לֵאמֹר"){
      document.getElementById('divNum_16_1_22_1L1').innerHTML ="ley'mor";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_22').innerHTML == "pê'ru"){
      document.getElementById('divNum_20_1_22_1L1').innerHTML ="פְּרוּ";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_22').innerHTML == "פְּרוּ"){
      document.getElementById('divNum_20_1_22_1L1').innerHTML ="pê'ru";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_22').innerHTML == "ur'vu"){
      document.getElementById('divNum_24_1_22_1L1').innerHTML ="וּרְּבוּ";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_22').innerHTML == "וּרְּבוּ"){
      document.getElementById('divNum_24_1_22_1L1').innerHTML ="ur'vu";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_22').innerHTML == "u'mil'u"){
      document.getElementById('divNum_28_1_22_1L1').innerHTML ="וּמִׁלְּאוּ";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_22').innerHTML == "וּמִׁלְּאוּ"){
      document.getElementById('divNum_28_1_22_1L1').innerHTML ="u'mil'u";

} //End of switch_Heb_Translit_1_22_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_22_2(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_32_1_22').innerHTML == "et"){
      document.getElementById('divNum_32_1_22_2L1').innerHTML ="אֶת";
    if( idElement == 1  &&  document.getElementById('divNum_32_1_22').innerHTML == "אֶת"){
      document.getElementById('divNum_32_1_22_2L1').innerHTML ="et";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_22').innerHTML == "ha'ma'yim"){
      document.getElementById('divNum_36_1_22_2L1').innerHTML ="הַמַיִׁם";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_22').innerHTML == "הַמַיִׁם"){
      document.getElementById('divNum_36_1_22_2L1').innerHTML ="ha'ma'yim";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_22').innerHTML == "ba'ya'mim"){
      document.getElementById('divNum_40_1_22_2L1').innerHTML ="בַיַמִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_22').innerHTML == "בַיַמִׁים"){
      document.getElementById('divNum_40_1_22_2L1').innerHTML ="ba'ya'mim";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_22').innerHTML == "wê'ha'oph"){
      document.getElementById('divNum_44_1_22_2L1').innerHTML ="וְּהָּעוֹף";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_22').innerHTML == "וְּהָּעוֹף"){
      document.getElementById('divNum_44_1_22_2L1').innerHTML ="wê'ha'oph";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_22').innerHTML == "yi'rev"){
      document.getElementById('divNum_48_1_22_2L1').innerHTML ="יִׁרֶב";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_22').innerHTML == "יִׁרֶב"){
      document.getElementById('divNum_48_1_22_2L1').innerHTML ="yi'rev";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_22').innerHTML == "ba'a'rets"){
      document.getElementById('divNum_52_1_22_2L1').innerHTML ="בָּאָרֶץ";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_22').innerHTML == "בָּאָרֶץ"){
      document.getElementById('divNum_52_1_22_2L1').innerHTML ="ba'a'rets";

} //End of switch_Heb_Translit_1_22_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_23_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_23').innerHTML == "wai'hi"){
      document.getElementById('divNum_4_1_23_1L1').innerHTML ="וַיְּהִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_23').innerHTML == "וַיְּהִׁי"){
      document.getElementById('divNum_4_1_23_1L1').innerHTML ="wai'hi";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_23').innerHTML == "e'rev"){
      document.getElementById('divNum_8_1_23_1L1').innerHTML ="עֶרֶב";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_23').innerHTML == "עֶרֶב"){
      document.getElementById('divNum_8_1_23_1L1').innerHTML ="e'rev";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_23').innerHTML == "wai'hi"){
      document.getElementById('divNum_12_1_23_1L1').innerHTML ="וַיְּהִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_23').innerHTML == "וַיְּהִׁי"){
      document.getElementById('divNum_12_1_23_1L1').innerHTML ="wai'hi";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_23').innerHTML == "vo'qer"){
      document.getElementById('divNum_16_1_23_1L1').innerHTML ="בֹקֶר";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_23').innerHTML == "בֹקֶר"){
      document.getElementById('divNum_16_1_23_1L1').innerHTML ="vo'qer";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_23').innerHTML == "yom"){
      document.getElementById('divNum_20_1_23_1L1').innerHTML ="יוֹם";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_23').innerHTML == "יוֹם"){
      document.getElementById('divNum_20_1_23_1L1').innerHTML ="yom";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_23').innerHTML == "hha'mi'shi"){
      document.getElementById('divNum_24_1_23_1L1').innerHTML ="חֲמִׁישִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_23').innerHTML == "חֲמִׁישִׁי"){
      document.getElementById('divNum_24_1_23_1L1').innerHTML ="hha'mi'shi";
//functionName_cahpter_verse_line
switch_Heb_Translit_1_24_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_24').innerHTML == "wai'yo'mer"){
      document.getElementById('divNum_4_1_24_1L1').innerHTML ="וַיֹאמֶר";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_24').innerHTML == "וַיֹאמֶר"){
      document.getElementById('divNum_4_1_24_1L1').innerHTML ="wai'yo'mer";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_24').innerHTML == "e'lo'him"){
      document.getElementById('divNum_8_1_24_1L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_24').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_8_1_24_1L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_24').innerHTML == "to'tsey"){
      document.getElementById('divNum_12_1_24_1L1').innerHTML ="תוֹצֵא";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_24').innerHTML == "תוֹצֵא"){
      document.getElementById('divNum_12_1_24_1L1').innerHTML ="to'tsey";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_24').innerHTML == "ha'a'rets"){
      document.getElementById('divNum_16_1_24_1L1').innerHTML ="הָּאָרֶץ";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_24').innerHTML == "הָּאָרֶץ"){
      document.getElementById('divNum_16_1_24_1L1').innerHTML ="ha'a'rets";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_24').innerHTML == "ne'phesh"){
      document.getElementById('divNum_20_1_24_1L1').innerHTML ="נֶפֶש";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_24').innerHTML == "נֶפֶש"){
      document.getElementById('divNum_20_1_24_1L1').innerHTML ="ne'phesh";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_24').innerHTML == "hhai'yah"){
      document.getElementById('divNum_24_1_24_1L1').innerHTML ="חַיָּה";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_24').innerHTML == "חַיָּה"){
      document.getElementById('divNum_24_1_24_1L1').innerHTML ="hhai'yah";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_24').innerHTML == "lê'mi'nah"){
      document.getElementById('divNum_28_1_24_1L1').innerHTML ="לְּמִׁינָּהּ";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_24').innerHTML == "לְּמִׁינָּהּ"){
      document.getElementById('divNum_28_1_24_1L1').innerHTML ="lê'mi'nah";

} //End of switch_Heb_Translit_1_24_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_24_2(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_32_1_24').innerHTML == "bê'hey'mah"){
      document.getElementById('divNum_32_1_24_2L1').innerHTML ="בְּהֵמָּה";
    if( idElement == 1  &&  document.getElementById('divNum_32_1_24').innerHTML == "בְּהֵמָּה"){
      document.getElementById('divNum_32_1_24_2L1').innerHTML ="bê'hey'mah";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_24').innerHTML == "wa're'mes"){
      document.getElementById('divNum_36_1_24_2L1').innerHTML ="וָּרֶמֶשׂ";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_24').innerHTML == "וָּרֶמֶשׂ"){
      document.getElementById('divNum_36_1_24_2L1').innerHTML ="wa're'mes";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_24').innerHTML == "wê'hhai'to2"){
      document.getElementById('divNum_40_1_24_2L1').innerHTML ="וְּחַיְּתוַֹ";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_24').innerHTML == "וְּחַיְּתוַֹ"){
      document.getElementById('divNum_40_1_24_2L1').innerHTML ="wê'hhai'to2";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_24').innerHTML == "e'rets"){
      document.getElementById('divNum_44_1_24_2L1').innerHTML ="אֶרֶץ";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_24').innerHTML == "אֶרֶץ"){
      document.getElementById('divNum_44_1_24_2L1').innerHTML ="e'rets";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_24').innerHTML == "lê'mi'nah"){
      document.getElementById('divNum_48_1_24_2L1').innerHTML ="לְּמִׁינָּהּ";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_24').innerHTML == "לְּמִׁינָּהּ"){
      document.getElementById('divNum_48_1_24_2L1').innerHTML ="lê'mi'nah";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_24').innerHTML == "wai'hi"){
      document.getElementById('divNum_52_1_24_2L1').innerHTML ="וַיְּהִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_24').innerHTML == "וַיְּהִׁי"){
      document.getElementById('divNum_52_1_24_2L1').innerHTML ="wai'hi";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_24').innerHTML == "kheyn3"){
      document.getElementById('divNum_56_1_24_2L1').innerHTML ="כֵן";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_24').innerHTML == "כֵן"){
      document.getElementById('divNum_56_1_24_2L1').innerHTML ="kheyn3";
//functionName_cahpter_verse_line
switch_Heb_Translit_1_25_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_25').innerHTML == "wai'ya'as"){
      document.getElementById('divNum_4_1_25_1L1').innerHTML ="וַיַעַשׂ";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_25').innerHTML == "וַיַעַשׂ"){
      document.getElementById('divNum_4_1_25_1L1').innerHTML ="wai'ya'as";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_25').innerHTML == "e'lo'him"){
      document.getElementById('divNum_8_1_25_1L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_25').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_8_1_25_1L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_25').innerHTML == "et"){
      document.getElementById('divNum_12_1_25_1L1').innerHTML ="אֶת";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_25').innerHTML == "אֶת"){
      document.getElementById('divNum_12_1_25_1L1').innerHTML ="et";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_25').innerHTML == "hhai'yat"){
      document.getElementById('divNum_16_1_25_1L1').innerHTML ="חַיַת";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_25').innerHTML == "חַיַת"){
      document.getElementById('divNum_16_1_25_1L1').innerHTML ="hhai'yat";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_25').innerHTML == "ha'a'rets"){
      document.getElementById('divNum_20_1_25_1L1').innerHTML ="הָּאָרֶץ";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_25').innerHTML == "הָּאָרֶץ"){
      document.getElementById('divNum_20_1_25_1L1').innerHTML ="ha'a'rets";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_25').innerHTML == "lê'mi'nah"){
      document.getElementById('divNum_24_1_25_1L1').innerHTML ="לְּמִׁינָּהּ";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_25').innerHTML == "לְּמִׁינָּהּ"){
      document.getElementById('divNum_24_1_25_1L1').innerHTML ="lê'mi'nah";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_25').innerHTML == "wê'et"){
      document.getElementById('divNum_28_1_25_1L1').innerHTML ="וְּאֶת";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_25').innerHTML == "וְּאֶת"){
      document.getElementById('divNum_28_1_25_1L1').innerHTML ="wê'et";

} //End of switch_Heb_Translit_1_25_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_25_2(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_32_1_25').innerHTML == "ha'be'hey'mah"){
      document.getElementById('divNum_32_1_25_2L1').innerHTML ="הַבְּהֵמָּה";
    if( idElement == 1  &&  document.getElementById('divNum_32_1_25').innerHTML == "הַבְּהֵמָּה"){
      document.getElementById('divNum_32_1_25_2L1').innerHTML ="ha'be'hey'mah";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_25').innerHTML == "lê'mi'nah"){
      document.getElementById('divNum_36_1_25_2L1').innerHTML ="לְּמִׁינָּהּ";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_25').innerHTML == "לְּמִׁינָּהּ"){
      document.getElementById('divNum_36_1_25_2L1').innerHTML ="lê'mi'nah";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_25').innerHTML == "wê'eyt"){
      document.getElementById('divNum_40_1_25_2L1').innerHTML ="וְּאֵת";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_25').innerHTML == "וְּאֵת"){
      document.getElementById('divNum_40_1_25_2L1').innerHTML ="wê'eyt";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_25').innerHTML == "kol"){
      document.getElementById('divNum_44_1_25_2L1').innerHTML ="כָּל";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_25').innerHTML == "כָּל"){
      document.getElementById('divNum_44_1_25_2L1').innerHTML ="kol";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_25').innerHTML == "re'mes"){
      document.getElementById('divNum_48_1_25_2L1').innerHTML ="רֶמֶשׂ";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_25').innerHTML == "רֶמֶשׂ"){
      document.getElementById('divNum_48_1_25_2L1').innerHTML ="re'mes";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_25').innerHTML == "ha'a'da'mah"){
      document.getElementById('divNum_52_1_25_2L1').innerHTML ="הָּאֲדָּמָּה";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_25').innerHTML == "הָּאֲדָּמָּה"){
      document.getElementById('divNum_52_1_25_2L1').innerHTML ="ha'a'da'mah";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_25').innerHTML == "lê'mi'ney'hu"){
      document.getElementById('divNum_56_1_25_2L1').innerHTML ="לְּמִׁינֵהוּ";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_25').innerHTML == "לְּמִׁינֵהוּ"){
      document.getElementById('divNum_56_1_25_2L1').innerHTML ="lê'mi'ney'hu";
    if( idElement == 1  &&  document.getElementById('divNum_60_1_25').innerHTML == "wai'yar"){
      document.getElementById('divNum_60_1_25_2L1').innerHTML ="וַיַרְּא";
    if( idElement == 1  &&  document.getElementById('divNum_60_1_25').innerHTML == "וַיַרְּא"){
      document.getElementById('divNum_60_1_25_2L1').innerHTML ="wai'yar";

} //End of switch_Heb_Translit_1_25_3function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_25_3(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_64_1_25').innerHTML == "e'lo'him"){
      document.getElementById('divNum_64_1_25_3L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_64_1_25').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_64_1_25_3L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_68_1_25').innerHTML == "ki"){
      document.getElementById('divNum_68_1_25_3L1').innerHTML ="כִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_68_1_25').innerHTML == "כִׁי"){
      document.getElementById('divNum_68_1_25_3L1').innerHTML ="ki";
    if( idElement == 1  &&  document.getElementById('divNum_72_1_25').innerHTML == "tov"){
      document.getElementById('divNum_72_1_25_3L1').innerHTML ="טוֹב";
    if( idElement == 1  &&  document.getElementById('divNum_72_1_25').innerHTML == "טוֹב"){
      document.getElementById('divNum_72_1_25_3L1').innerHTML ="tov";
//functionName_cahpter_verse_line
switch_Heb_Translit_1_26_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_26').innerHTML == "wai'yo'mer"){
      document.getElementById('divNum_4_1_26_1L1').innerHTML ="וַיֹאמֶר";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_26').innerHTML == "וַיֹאמֶר"){
      document.getElementById('divNum_4_1_26_1L1').innerHTML ="wai'yo'mer";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_26').innerHTML == "e'lo'him"){
      document.getElementById('divNum_8_1_26_1L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_26').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_8_1_26_1L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_26').innerHTML == "na'a'seh"){
      document.getElementById('divNum_12_1_26_1L1').innerHTML ="נַעֲשֶׂה";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_26').innerHTML == "נַעֲשֶׂה"){
      document.getElementById('divNum_12_1_26_1L1').innerHTML ="na'a'seh";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_26').innerHTML == "a'dam"){
      document.getElementById('divNum_16_1_26_1L1').innerHTML ="אָדָּם";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_26').innerHTML == "אָדָּם"){
      document.getElementById('divNum_16_1_26_1L1').innerHTML ="a'dam";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_26').innerHTML == "bê'tsal'mey'nu"){
      document.getElementById('divNum_20_1_26_1L1').innerHTML ="בְּצַלְּמֵנוּ";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_26').innerHTML == "בְּצַלְּמֵנוּ"){
      document.getElementById('divNum_20_1_26_1L1').innerHTML ="bê'tsal'mey'nu";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_26').innerHTML == "kid'mu'tey'nu"){
      document.getElementById('divNum_24_1_26_1L1').innerHTML ="כִׁדְּמוּתֵנוּ";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_26').innerHTML == "כִׁדְּמוּתֵנוּ"){
      document.getElementById('divNum_24_1_26_1L1').innerHTML ="kid'mu'tey'nu";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_26').innerHTML == "wê'yir'du"){
      document.getElementById('divNum_28_1_26_1L1').innerHTML ="וְּיִׁרְּדוּ";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_26').innerHTML == "וְּיִׁרְּדוּ"){
      document.getElementById('divNum_28_1_26_1L1').innerHTML ="wê'yir'du";

} //End of switch_Heb_Translit_1_26_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_26_2(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_32_1_26').innerHTML == "vid'gat"){
      document.getElementById('divNum_32_1_26_2L1').innerHTML ="בִׁדְּגַת";
    if( idElement == 1  &&  document.getElementById('divNum_32_1_26').innerHTML == "בִׁדְּגַת"){
      document.getElementById('divNum_32_1_26_2L1').innerHTML ="vid'gat";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_26').innerHTML == "hai'yam"){
      document.getElementById('divNum_36_1_26_2L1').innerHTML ="הַיָּם";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_26').innerHTML == "הַיָּם"){
      document.getElementById('divNum_36_1_26_2L1').innerHTML ="hai'yam";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_26').innerHTML == "uv'oph"){
      document.getElementById('divNum_40_1_26_2L1').innerHTML ="וּבְּעוֹף";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_26').innerHTML == "וּבְּעוֹף"){
      document.getElementById('divNum_40_1_26_2L1').innerHTML ="uv'oph";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_26').innerHTML == "ha'sha'ma'yim"){
      document.getElementById('divNum_44_1_26_2L1').innerHTML ="הַשָּמַיִׁם";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_26').innerHTML == "הַשָּמַיִׁם"){
      document.getElementById('divNum_44_1_26_2L1').innerHTML ="ha'sha'ma'yim";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_26').innerHTML == "u'va'be'hey'mah"){
      document.getElementById('divNum_48_1_26_2L1').innerHTML ="וּבַבְּהֵמָּה";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_26').innerHTML == "וּבַבְּהֵמָּה"){
      document.getElementById('divNum_48_1_26_2L1').innerHTML ="u'va'be'hey'mah";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_26').innerHTML == "uv'khol"){
      document.getElementById('divNum_52_1_26_2L1').innerHTML ="וּבְּכָּל";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_26').innerHTML == "וּבְּכָּל"){
      document.getElementById('divNum_52_1_26_2L1').innerHTML ="uv'khol";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_26').innerHTML == "ha'a'rets"){
      document.getElementById('divNum_56_1_26_2L1').innerHTML ="הָּאָרֶץ";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_26').innerHTML == "הָּאָרֶץ"){
      document.getElementById('divNum_56_1_26_2L1').innerHTML ="ha'a'rets";
    if( idElement == 1  &&  document.getElementById('divNum_60_1_26').innerHTML == "uv'khol"){
      document.getElementById('divNum_60_1_26_2L1').innerHTML ="וּבְּכָּל";
    if( idElement == 1  &&  document.getElementById('divNum_60_1_26').innerHTML == "וּבְּכָּל"){
      document.getElementById('divNum_60_1_26_2L1').innerHTML ="uv'khol";

} //End of switch_Heb_Translit_1_26_3function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_26_3(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_64_1_26').innerHTML == "ha're'mes"){
      document.getElementById('divNum_64_1_26_3L1').innerHTML ="הָּרֶמֶשׂ";
    if( idElement == 1  &&  document.getElementById('divNum_64_1_26').innerHTML == "הָּרֶמֶשׂ"){
      document.getElementById('divNum_64_1_26_3L1').innerHTML ="ha're'mes";
    if( idElement == 1  &&  document.getElementById('divNum_68_1_26').innerHTML == "ha'ro'meys"){
      document.getElementById('divNum_68_1_26_3L1').innerHTML ="הָּרֹמֵשׂ";
    if( idElement == 1  &&  document.getElementById('divNum_68_1_26').innerHTML == "הָּרֹמֵשׂ"){
      document.getElementById('divNum_68_1_26_3L1').innerHTML ="ha'ro'meys";
    if( idElement == 1  &&  document.getElementById('divNum_72_1_26').innerHTML == "al"){
      document.getElementById('divNum_72_1_26_3L1').innerHTML ="עַל";
    if( idElement == 1  &&  document.getElementById('divNum_72_1_26').innerHTML == "עַל"){
      document.getElementById('divNum_72_1_26_3L1').innerHTML ="al";
    if( idElement == 1  &&  document.getElementById('divNum_76_1_26').innerHTML == "ha'a'rets"){
      document.getElementById('divNum_76_1_26_3L1').innerHTML ="הָּאָרֶץ";
    if( idElement == 1  &&  document.getElementById('divNum_76_1_26').innerHTML == "הָּאָרֶץ"){
      document.getElementById('divNum_76_1_26_3L1').innerHTML ="ha'a'rets";

} //End of switch_Heb_Translit_1_26_3function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_27_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_27').innerHTML == "wai'yiv'ra"){
      document.getElementById('divNum_4_1_27_1L1').innerHTML ="וַיִׁבְּרָּא";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_27').innerHTML == "וַיִׁבְּרָּא"){
      document.getElementById('divNum_4_1_27_1L1').innerHTML ="wai'yiv'ra";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_27').innerHTML == "e'lo'him"){
      document.getElementById('divNum_8_1_27_1L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_27').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_8_1_27_1L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_27').innerHTML == "et"){
      document.getElementById('divNum_12_1_27_1L1').innerHTML ="אֶת";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_27').innerHTML == "אֶת"){
      document.getElementById('divNum_12_1_27_1L1').innerHTML ="et";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_27').innerHTML == "ha'a'dam"){
      document.getElementById('divNum_16_1_27_1L1').innerHTML ="הָּאָדָּם";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_27').innerHTML == "הָּאָדָּם"){
      document.getElementById('divNum_16_1_27_1L1').innerHTML ="ha'a'dam";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_27').innerHTML == "bê'tsal'mo"){
      document.getElementById('divNum_20_1_27_1L1').innerHTML ="בְּצַלְּמוַֹ";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_27').innerHTML == "בְּצַלְּמוַֹ"){
      document.getElementById('divNum_20_1_27_1L1').innerHTML ="bê'tsal'mo";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_27').innerHTML == "bê'tse'lem"){
      document.getElementById('divNum_24_1_27_1L1').innerHTML ="בְּצֶלֶם";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_27').innerHTML == "בְּצֶלֶם"){
      document.getElementById('divNum_24_1_27_1L1').innerHTML ="bê'tse'lem";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_27').innerHTML == "e'lo'him"){
      document.getElementById('divNum_28_1_27_1L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_27').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_28_1_27_1L1').innerHTML ="e'lo'him";

} //End of switch_Heb_Translit_1_27_1function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_28_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_28').innerHTML == "wai'va'rekh"){
      document.getElementById('divNum_4_1_28_1L1').innerHTML ="וַיְּבָּרֶךְ";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_28').innerHTML == "וַיְּבָּרֶךְ"){
      document.getElementById('divNum_4_1_28_1L1').innerHTML ="wai'va'rekh";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_28').innerHTML == "o'tam"){
      document.getElementById('divNum_8_1_28_1L1').innerHTML ="אֹתָּם";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_28').innerHTML == "אֹתָּם"){
      document.getElementById('divNum_8_1_28_1L1').innerHTML ="o'tam";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_28').innerHTML == "e'lo'him"){
      document.getElementById('divNum_12_1_28_1L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_28').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_12_1_28_1L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_28').innerHTML == "wai'yo'mer"){
      document.getElementById('divNum_16_1_28_1L1').innerHTML ="וַיֹאמֶר";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_28').innerHTML == "וַיֹאמֶר"){
      document.getElementById('divNum_16_1_28_1L1').innerHTML ="wai'yo'mer";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_28').innerHTML == "Elohiym"){
      document.getElementById('divNum_20_1_28_1L1').innerHTML ="la'hem";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_28').innerHTML == "la'hem"){
      document.getElementById('divNum_20_1_28_1L1').innerHTML ="Elohiym";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_28').innerHTML == "!(mp)~REPRODUCE(V)"){
      document.getElementById('divNum_24_1_28_1L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_28').innerHTML == "e'lo'him"){
      document.getElementById('divNum_24_1_28_1L1').innerHTML ="!(mp)~REPRODUCE(V)";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_28').innerHTML == "and~!(mp)~INCREASE(V)"){
      document.getElementById('divNum_28_1_28_1L1').innerHTML ="pê'ru";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_28').innerHTML == "pê'ru"){
      document.getElementById('divNum_28_1_28_1L1').innerHTML ="and~!(mp)~INCREASE(V)";

} //End of switch_Heb_Translit_1_28_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_28_2(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_32_1_28').innerHTML == "and~!(mp)~FILL(V)"){
      document.getElementById('divNum_32_1_28_2L1').innerHTML ="ur'vu";
    if( idElement == 1  &&  document.getElementById('divNum_32_1_28').innerHTML == "ur'vu"){
      document.getElementById('divNum_32_1_28_2L1').innerHTML ="and~!(mp)~FILL(V)";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_28').innerHTML == "AT"){
      document.getElementById('divNum_36_1_28_2L1').innerHTML ="u'mil'u";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_28').innerHTML == "u'mil'u"){
      document.getElementById('divNum_36_1_28_2L1').innerHTML ="AT";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_28').innerHTML == "the~LAND"){
      document.getElementById('divNum_40_1_28_2L1').innerHTML ="et";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_28').innerHTML == "et"){
      document.getElementById('divNum_40_1_28_2L1').innerHTML ="the~LAND";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_28').innerHTML == "and~!(mp)~SUBDUE(V)"){
      document.getElementById('divNum_44_1_28_2L1').innerHTML ="ha'a'rets";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_28').innerHTML == "ha'a'rets"){
      document.getElementById('divNum_44_1_28_2L1').innerHTML ="and~!(mp)~SUBDUE(V)";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_28').innerHTML == "and~!(mp)~RULE(V)"){
      document.getElementById('divNum_48_1_28_2L1').innerHTML ="wê'khiv'shu'ah";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_28').innerHTML == "wê'khiv'shu'ah"){
      document.getElementById('divNum_48_1_28_2L1').innerHTML ="and~!(mp)~RULE(V)";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_28').innerHTML == "in~FISH"){
      document.getElementById('divNum_52_1_28_2L1').innerHTML ="ur'du";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_28').innerHTML == "ur'du"){
      document.getElementById('divNum_52_1_28_2L1').innerHTML ="in~FISH";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_28').innerHTML == "the~SEA"){
      document.getElementById('divNum_56_1_28_2L1').innerHTML ="bid'gat";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_28').innerHTML == "bid'gat"){
      document.getElementById('divNum_56_1_28_2L1').innerHTML ="the~SEA";
    if( idElement == 1  &&  document.getElementById('divNum_60_1_28').innerHTML == "and~in~FLYER"){
      document.getElementById('divNum_60_1_28_2L1').innerHTML ="hai'yam";
    if( idElement == 1  &&  document.getElementById('divNum_60_1_28').innerHTML == "hai'yam"){
      document.getElementById('divNum_60_1_28_2L1').innerHTML ="and~in~FLYER";

} //End of switch_Heb_Translit_1_28_3function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_28_3(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_64_1_28').innerHTML == "the~SKY"){
      document.getElementById('divNum_64_1_28_3L1').innerHTML ="uv'oph";
    if( idElement == 1  &&  document.getElementById('divNum_64_1_28').innerHTML == "uv'oph"){
      document.getElementById('divNum_64_1_28_3L1').innerHTML ="the~SKY";
    if( idElement == 1  &&  document.getElementById('divNum_68_1_28').innerHTML == "and~in~ALL"){
      document.getElementById('divNum_68_1_28_3L1').innerHTML ="ha'sha'ma'yim";
    if( idElement == 1  &&  document.getElementById('divNum_68_1_28').innerHTML == "ha'sha'ma'yim"){
      document.getElementById('divNum_68_1_28_3L1').innerHTML ="and~in~ALL";
    if( idElement == 1  &&  document.getElementById('divNum_72_1_28').innerHTML == "LIVING"){
      document.getElementById('divNum_72_1_28_3L1').innerHTML ="uv'khol";
    if( idElement == 1  &&  document.getElementById('divNum_72_1_28').innerHTML == "uv'khol"){
      document.getElementById('divNum_72_1_28_3L1').innerHTML ="LIVING";
    if( idElement == 1  &&  document.getElementById('divNum_76_1_28').innerHTML == "the~TREAD(V)"){
      document.getElementById('divNum_76_1_28_3L1').innerHTML ="hhai'yah";
    if( idElement == 1  &&  document.getElementById('divNum_76_1_28').innerHTML == "hhai'yah"){
      document.getElementById('divNum_76_1_28_3L1').innerHTML ="the~TREAD(V)";
    if( idElement == 1  &&  document.getElementById('divNum_80_1_28').innerHTML == "UPON"){
      document.getElementById('divNum_80_1_28_3L1').innerHTML ="ha'ro'me'set";
    if( idElement == 1  &&  document.getElementById('divNum_80_1_28').innerHTML == "ha'ro'me'set"){
      document.getElementById('divNum_80_1_28_3L1').innerHTML ="UPON";
    if( idElement == 1  &&  document.getElementById('divNum_84_1_28').innerHTML == "the~LAND"){
      document.getElementById('divNum_84_1_28_3L1').innerHTML ="al";
    if( idElement == 1  &&  document.getElementById('divNum_84_1_28').innerHTML == "al"){
      document.getElementById('divNum_84_1_28_3L1').innerHTML ="the~LAND";

} //End of switch_Heb_Translit_1_28_3function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_29_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_29').innerHTML == "wai'yo'mer"){
      document.getElementById('divNum_4_1_29_1L1').innerHTML ="וַיֹאמֶר";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_29').innerHTML == "וַיֹאמֶר"){
      document.getElementById('divNum_4_1_29_1L1').innerHTML ="wai'yo'mer";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_29').innerHTML == "e'lo'him"){
      document.getElementById('divNum_8_1_29_1L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_29').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_8_1_29_1L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_29').innerHTML == "hin'neyh"){
      document.getElementById('divNum_12_1_29_1L1').innerHTML ="הִׁנֵה";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_29').innerHTML == "הִׁנֵה"){
      document.getElementById('divNum_12_1_29_1L1').innerHTML ="hin'neyh";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_29').innerHTML == "na'ta'ti"){
      document.getElementById('divNum_16_1_29_1L1').innerHTML ="נָּתַתִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_29').innerHTML == "נָּתַתִׁי"){
      document.getElementById('divNum_16_1_29_1L1').innerHTML ="na'ta'ti";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_29').innerHTML == "AT"){
      document.getElementById('divNum_20_1_29_1L1').innerHTML ="la'khem";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_29').innerHTML == "la'khem"){
      document.getElementById('divNum_20_1_29_1L1').innerHTML ="AT";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_29').innerHTML == "ALL"){
      document.getElementById('divNum_24_1_29_1L1').innerHTML ="et";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_29').innerHTML == "et"){
      document.getElementById('divNum_24_1_29_1L1').innerHTML ="ALL";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_29').innerHTML == "HERB"){
      document.getElementById('divNum_28_1_29_1L1').innerHTML ="kol";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_29').innerHTML == "kol"){
      document.getElementById('divNum_28_1_29_1L1').innerHTML ="HERB";

} //End of switch_Heb_Translit_1_29_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_29_2(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_32_1_29').innerHTML == "SOW(V)"){
      document.getElementById('divNum_32_1_29_2L1').innerHTML ="ey'sev";
    if( idElement == 1  &&  document.getElementById('divNum_32_1_29').innerHTML == "ey'sev"){
      document.getElementById('divNum_32_1_29_2L1').innerHTML ="SOW(V)";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_29').innerHTML == "SEED"){
      document.getElementById('divNum_36_1_29_2L1').innerHTML ="zo'rey'a";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_29').innerHTML == "zo'rey'a"){
      document.getElementById('divNum_36_1_29_2L1').innerHTML ="SEED";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_29').innerHTML == "WHICH"){
      document.getElementById('divNum_40_1_29_2L1').innerHTML ="ze'ra";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_29').innerHTML == "ze'ra"){
      document.getElementById('divNum_40_1_29_2L1').innerHTML ="WHICH";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_29').innerHTML == "UPON"){
      document.getElementById('divNum_44_1_29_2L1').innerHTML ="a'sher";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_29').innerHTML == "a'sher"){
      document.getElementById('divNum_44_1_29_2L1').innerHTML ="UPON";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_29').innerHTML == "FACE"){
      document.getElementById('divNum_48_1_29_2L1').innerHTML ="al";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_29').innerHTML == "al"){
      document.getElementById('divNum_48_1_29_2L1').innerHTML ="FACE";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_29').innerHTML == "ALL"){
      document.getElementById('divNum_52_1_29_2L1').innerHTML ="pê'ney";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_29').innerHTML == "pê'ney"){
      document.getElementById('divNum_52_1_29_2L1').innerHTML ="ALL";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_29').innerHTML == "the~LAND"){
      document.getElementById('divNum_56_1_29_2L1').innerHTML ="khol";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_29').innerHTML == "khol"){
      document.getElementById('divNum_56_1_29_2L1').innerHTML ="the~LAND";
    if( idElement == 1  &&  document.getElementById('divNum_60_1_29').innerHTML == "and~AT"){
      document.getElementById('divNum_60_1_29_2L1').innerHTML ="ha'a'rets";
    if( idElement == 1  &&  document.getElementById('divNum_60_1_29').innerHTML == "ha'a'rets"){
      document.getElementById('divNum_60_1_29_2L1').innerHTML ="and~AT";

} //End of switch_Heb_Translit_1_29_3function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_29_3(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_64_1_29').innerHTML == "ALL"){
      document.getElementById('divNum_64_1_29_3L1').innerHTML ="wê'et";
    if( idElement == 1  &&  document.getElementById('divNum_64_1_29').innerHTML == "wê'et"){
      document.getElementById('divNum_64_1_29_3L1').innerHTML ="ALL";
    if( idElement == 1  &&  document.getElementById('divNum_68_1_29').innerHTML == "the~TREE"){
      document.getElementById('divNum_68_1_29_3L1').innerHTML ="kol";
    if( idElement == 1  &&  document.getElementById('divNum_68_1_29').innerHTML == "kol"){
      document.getElementById('divNum_68_1_29_3L1').innerHTML ="the~TREE";
    if( idElement == 1  &&  document.getElementById('divNum_72_1_29').innerHTML == "WHICH"){
      document.getElementById('divNum_72_1_29_3L1').innerHTML ="ha'eyts";
    if( idElement == 1  &&  document.getElementById('divNum_72_1_29').innerHTML == "ha'eyts"){
      document.getElementById('divNum_72_1_29_3L1').innerHTML ="WHICH";
    if( idElement == 1  &&  document.getElementById('divNum_76_1_29').innerHTML == "in~him"){
      document.getElementById('divNum_76_1_29_3L1').innerHTML ="a'sher";
    if( idElement == 1  &&  document.getElementById('divNum_76_1_29').innerHTML == "a'sher"){
      document.getElementById('divNum_76_1_29_3L1').innerHTML ="in~him";
    if( idElement == 1  &&  document.getElementById('divNum_80_1_29').innerHTML == "1859"){
      document.getElementById('divNum_80_1_29_3L1').innerHTML ="PRODUCE";
    if( idElement == 1  &&  document.getElementById('divNum_80_1_29').innerHTML == "PRODUCE"){
      document.getElementById('divNum_80_1_29_3L1').innerHTML ="1859";
    if( idElement == 1  &&  document.getElementById('divNum_84_1_29').innerHTML == "1706"){
      document.getElementById('divNum_84_1_29_3L1').innerHTML ="TREE";
    if( idElement == 1  &&  document.getElementById('divNum_84_1_29').innerHTML == "TREE"){
      document.getElementById('divNum_84_1_29_3L1').innerHTML ="1706";
    if( idElement == 1  &&  document.getElementById('divNum_88_1_29').innerHTML == "605~ing(ms)"){
      document.getElementById('divNum_88_1_29_3L1').innerHTML ="SOW(V)";
    if( idElement == 1  &&  document.getElementById('divNum_88_1_29').innerHTML == "SOW(V)"){
      document.getElementById('divNum_88_1_29_3L1').innerHTML ="605~ing(ms)";
    if( idElement == 1  &&  document.getElementById('divNum_92_1_29').innerHTML == "606"){
      document.getElementById('divNum_92_1_29_3L1').innerHTML ="SEED";
    if( idElement == 1  &&  document.getElementById('divNum_92_1_29').innerHTML == "SEED"){
      document.getElementById('divNum_92_1_29_3L1').innerHTML ="606";

} //End of switch_Heb_Translit_1_29_4function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_29_4(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_96_1_29').innerHTML == "לָּכֶם"){
      document.getElementById('divNum_96_1_29_4L1').innerHTML ="to~you(mp)";
    if( idElement == 1  &&  document.getElementById('divNum_96_1_29').innerHTML == "to~you(mp)"){
      document.getElementById('divNum_96_1_29_4L1').innerHTML ="לָּכֶם";
    if( idElement == 1  &&  document.getElementById('divNum_100_1_29').innerHTML == "יִׁהְּיֶה"){
      document.getElementById('divNum_100_1_29_4L1').innerHTML ="505";
    if( idElement == 1  &&  document.getElementById('divNum_100_1_29').innerHTML == "505"){
      document.getElementById('divNum_100_1_29_4L1').innerHTML ="יִׁהְּיֶה";
    if( idElement == 1  &&  document.getElementById('divNum_104_1_29').innerHTML == "לְּאָכְּלָּה"){
      document.getElementById('divNum_104_1_29_4L1').innerHTML ="949";
    if( idElement == 1  &&  document.getElementById('divNum_104_1_29').innerHTML == "949"){
      document.getElementById('divNum_104_1_29_4L1').innerHTML ="לְּאָכְּלָּה";

} //End of switch_Heb_Translit_1_29_4function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_30_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_30').innerHTML == "ul'khol"){
      document.getElementById('divNum_4_1_30_1L1').innerHTML ="וּלְּכָּל";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_30').innerHTML == "וּלְּכָּל"){
      document.getElementById('divNum_4_1_30_1L1').innerHTML ="ul'khol";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_30').innerHTML == "hhai'yat"){
      document.getElementById('divNum_8_1_30_1L1').innerHTML ="חַיַת";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_30').innerHTML == "חַיַת"){
      document.getElementById('divNum_8_1_30_1L1').innerHTML ="hhai'yat";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_30').innerHTML == "ha'a'rets"){
      document.getElementById('divNum_12_1_30_1L1').innerHTML ="הָּאָרֶץ";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_30').innerHTML == "הָּאָרֶץ"){
      document.getElementById('divNum_12_1_30_1L1').innerHTML ="ha'a'rets";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_30').innerHTML == "ul'khol"){
      document.getElementById('divNum_16_1_30_1L1').innerHTML ="וּלְּכָּל";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_30').innerHTML == "וּלְּכָּל"){
      document.getElementById('divNum_16_1_30_1L1').innerHTML ="ul'khol";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_30').innerHTML == "oph"){
      document.getElementById('divNum_20_1_30_1L1').innerHTML ="עוֹף";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_30').innerHTML == "עוֹף"){
      document.getElementById('divNum_20_1_30_1L1').innerHTML ="oph";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_30').innerHTML == "ha'sha'ma'yim"){
      document.getElementById('divNum_24_1_30_1L1').innerHTML ="הַשָּמַיִׁם";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_30').innerHTML == "הַשָּמַיִׁם"){
      document.getElementById('divNum_24_1_30_1L1').innerHTML ="ha'sha'ma'yim";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_30').innerHTML == "ul'khol"){
      document.getElementById('divNum_28_1_30_1L1').innerHTML ="וּלְּכֹל";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_30').innerHTML == "וּלְּכֹל"){
      document.getElementById('divNum_28_1_30_1L1').innerHTML ="ul'khol";

} //End of switch_Heb_Translit_1_30_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_30_2(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_32_1_30').innerHTML == "ro'meys"){
      document.getElementById('divNum_32_1_30_2L1').innerHTML ="רוֹמֵשׂ";
    if( idElement == 1  &&  document.getElementById('divNum_32_1_30').innerHTML == "רוֹמֵשׂ"){
      document.getElementById('divNum_32_1_30_2L1').innerHTML ="ro'meys";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_30').innerHTML == "al"){
      document.getElementById('divNum_36_1_30_2L1').innerHTML ="עַל";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_30').innerHTML == "עַל"){
      document.getElementById('divNum_36_1_30_2L1').innerHTML ="al";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_30').innerHTML == "ha'a'rets"){
      document.getElementById('divNum_40_1_30_2L1').innerHTML ="הָּאָרֶץ";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_30').innerHTML == "הָּאָרֶץ"){
      document.getElementById('divNum_40_1_30_2L1').innerHTML ="ha'a'rets";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_30').innerHTML == "a'sher"){
      document.getElementById('divNum_44_1_30_2L1').innerHTML ="אֲשֶר";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_30').innerHTML == "אֲשֶר"){
      document.getElementById('divNum_44_1_30_2L1').innerHTML ="a'sher";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_30').innerHTML == "BEING"){
      document.getElementById('divNum_48_1_30_2L1').innerHTML ="bo";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_30').innerHTML == "bo"){
      document.getElementById('divNum_48_1_30_2L1').innerHTML ="BEING";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_30').innerHTML == "LIVING"){
      document.getElementById('divNum_52_1_30_2L1').innerHTML ="ne'phesh";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_30').innerHTML == "ne'phesh"){
      document.getElementById('divNum_52_1_30_2L1').innerHTML ="LIVING";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_30').innerHTML == "AT"){
      document.getElementById('divNum_56_1_30_2L1').innerHTML ="hhai'yah";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_30').innerHTML == "hhai'yah"){
      document.getElementById('divNum_56_1_30_2L1').innerHTML ="AT";
    if( idElement == 1  &&  document.getElementById('divNum_60_1_30').innerHTML == "ALL"){
      document.getElementById('divNum_60_1_30_2L1').innerHTML ="et";
    if( idElement == 1  &&  document.getElementById('divNum_60_1_30').innerHTML == "et"){
      document.getElementById('divNum_60_1_30_2L1').innerHTML ="ALL";

} //End of switch_Heb_Translit_1_30_3function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_30_3(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_64_1_30').innerHTML == "GREEN"){
      document.getElementById('divNum_64_1_30_3L1').innerHTML ="kol";
    if( idElement == 1  &&  document.getElementById('divNum_64_1_30').innerHTML == "kol"){
      document.getElementById('divNum_64_1_30_3L1').innerHTML ="GREEN";
    if( idElement == 1  &&  document.getElementById('divNum_68_1_30').innerHTML == "HERB"){
      document.getElementById('divNum_68_1_30_3L1').innerHTML ="ye'req";
    if( idElement == 1  &&  document.getElementById('divNum_68_1_30').innerHTML == "ye'req"){
      document.getElementById('divNum_68_1_30_3L1').innerHTML ="HERB";
    if( idElement == 1  &&  document.getElementById('divNum_72_1_30').innerHTML == "to~FOOD"){
      document.getElementById('divNum_72_1_30_3L1').innerHTML ="ey'sev";
    if( idElement == 1  &&  document.getElementById('divNum_72_1_30').innerHTML == "ey'sev"){
      document.getElementById('divNum_72_1_30_3L1').innerHTML ="to~FOOD";
    if( idElement == 1  &&  document.getElementById('divNum_76_1_30').innerHTML == "and~he~will~EXIST(V)"){
      document.getElementById('divNum_76_1_30_3L1').innerHTML ="lê'akh'lah";
    if( idElement == 1  &&  document.getElementById('divNum_76_1_30').innerHTML == "lê'akh'lah"){
      document.getElementById('divNum_76_1_30_3L1').innerHTML ="and~he~will~EXIST(V)";
    if( idElement == 1  &&  document.getElementById('divNum_80_1_30').innerHTML == "SO"){
      document.getElementById('divNum_80_1_30_3L1').innerHTML ="wai'hi";
    if( idElement == 1  &&  document.getElementById('divNum_80_1_30').innerHTML == "wai'hi"){
      document.getElementById('divNum_80_1_30_3L1').innerHTML ="SO";

} //End of switch_Heb_Translit_1_30_3function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_31_1(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_4_1_31').innerHTML == "wai'yar"){
      document.getElementById('divNum_4_1_31_1L1').innerHTML ="וַיַרְּא";
    if( idElement == 1  &&  document.getElementById('divNum_4_1_31').innerHTML == "וַיַרְּא"){
      document.getElementById('divNum_4_1_31_1L1').innerHTML ="wai'yar";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_31').innerHTML == "e'lo'him"){
      document.getElementById('divNum_8_1_31_1L1').innerHTML ="אֱלֹהִׁים";
    if( idElement == 1  &&  document.getElementById('divNum_8_1_31').innerHTML == "אֱלֹהִׁים"){
      document.getElementById('divNum_8_1_31_1L1').innerHTML ="e'lo'him";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_31').innerHTML == "et"){
      document.getElementById('divNum_12_1_31_1L1').innerHTML ="אֶת";
    if( idElement == 1  &&  document.getElementById('divNum_12_1_31').innerHTML == "אֶת"){
      document.getElementById('divNum_12_1_31_1L1').innerHTML ="et";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_31').innerHTML == "kol"){
      document.getElementById('divNum_16_1_31_1L1').innerHTML ="כָּל";
    if( idElement == 1  &&  document.getElementById('divNum_16_1_31').innerHTML == "כָּל"){
      document.getElementById('divNum_16_1_31_1L1').innerHTML ="kol";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_31').innerHTML == "a'sher"){
      document.getElementById('divNum_20_1_31_1L1').innerHTML ="אֲשֶר";
    if( idElement == 1  &&  document.getElementById('divNum_20_1_31').innerHTML == "אֲשֶר"){
      document.getElementById('divNum_20_1_31_1L1').innerHTML ="a'sher";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_31').innerHTML == "a'sah"){
      document.getElementById('divNum_24_1_31_1L1').innerHTML ="עָּשָּׂה";
    if( idElement == 1  &&  document.getElementById('divNum_24_1_31').innerHTML == "עָּשָּׂה"){
      document.getElementById('divNum_24_1_31_1L1').innerHTML ="a'sah";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_31').innerHTML == "wê'hin'neyh"){
      document.getElementById('divNum_28_1_31_1L1').innerHTML ="וְּהִׁנֵה";
    if( idElement == 1  &&  document.getElementById('divNum_28_1_31').innerHTML == "וְּהִׁנֵה"){
      document.getElementById('divNum_28_1_31_1L1').innerHTML ="wê'hin'neyh";

} //End of switch_Heb_Translit_1_31_2function

//functionName_cahpter_verse_line
switch_Heb_Translit_1_31_2(idElement){

	//1_Transliteration-->Heb 2_Heb_Transliteration
    if( idElement == 1  &&  document.getElementById('divNum_32_1_31').innerHTML == "tov"){
      document.getElementById('divNum_32_1_31_2L1').innerHTML ="טוֹב";
    if( idElement == 1  &&  document.getElementById('divNum_32_1_31').innerHTML == "טוֹב"){
      document.getElementById('divNum_32_1_31_2L1').innerHTML ="tov";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_31').innerHTML == "mê'od"){
      document.getElementById('divNum_36_1_31_2L1').innerHTML ="מְּאֹד";
    if( idElement == 1  &&  document.getElementById('divNum_36_1_31').innerHTML == "מְּאֹד"){
      document.getElementById('divNum_36_1_31_2L1').innerHTML ="mê'od";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_31').innerHTML == "wai'hi"){
      document.getElementById('divNum_40_1_31_2L1').innerHTML ="וַיְּהִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_40_1_31').innerHTML == "וַיְּהִׁי"){
      document.getElementById('divNum_40_1_31_2L1').innerHTML ="wai'hi";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_31').innerHTML == "e'rev"){
      document.getElementById('divNum_44_1_31_2L1').innerHTML ="עֶרֶב";
    if( idElement == 1  &&  document.getElementById('divNum_44_1_31').innerHTML == "עֶרֶב"){
      document.getElementById('divNum_44_1_31_2L1').innerHTML ="e'rev";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_31').innerHTML == "wai'hi"){
      document.getElementById('divNum_48_1_31_2L1').innerHTML ="וַיְּהִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_48_1_31').innerHTML == "וַיְּהִׁי"){
      document.getElementById('divNum_48_1_31_2L1').innerHTML ="wai'hi";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_31').innerHTML == "vo'qer"){
      document.getElementById('divNum_52_1_31_2L1').innerHTML ="בֹקֶר";
    if( idElement == 1  &&  document.getElementById('divNum_52_1_31').innerHTML == "בֹקֶר"){
      document.getElementById('divNum_52_1_31_2L1').innerHTML ="vo'qer";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_31').innerHTML == "yom"){
      document.getElementById('divNum_56_1_31_2L1').innerHTML ="יוֹם";
    if( idElement == 1  &&  document.getElementById('divNum_56_1_31').innerHTML == "יוֹם"){
      document.getElementById('divNum_56_1_31_2L1').innerHTML ="yom";
    if( idElement == 1  &&  document.getElementById('divNum_60_1_31').innerHTML == "ha'shi'shi2"){
      document.getElementById('divNum_60_1_31_2L1').innerHTML ="הַשִׁשִׁי";
    if( idElement == 1  &&  document.getElementById('divNum_60_1_31').innerHTML == "הַשִׁשִׁי"){
      document.getElementById('divNum_60_1_31_2L1').innerHTML ="ha'shi'shi2";

} //End of switch_Heb_Translit_1_31_2function

	return false;}
