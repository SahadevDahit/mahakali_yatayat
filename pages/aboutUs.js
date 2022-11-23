import React from "react";
import Image from "next/image";
const aboutUs = () => {
  return (
    <>
      <div className="mt-2" style={{ backgroundColor: "red" }}>
        <h2
          className="fw-bold text-center rounded-4 text-white"
          style={{ backgroundColor: "blue" }}
        >
          महाकाली यातायात बहुउद्देश्यीय कम्पनी प्रा.लि
        </h2>
        <h4 className="rounded-4 bg-white text-black text-center fw-bold">
          प्रधान कार्यालय: भीमदत्त नगरपालिका-४,कन्चनपुर,७
        </h4>
        <h5
          className="rounded-4 text-center"
          style={{ backgroundColor: "green" }}
        >
          Cont: 099-522491/521627
        </h5>
      </div>

      <div style={{ backgroundColor: "cyan" }}>
        <h4
          className="text-center py-1  rounded-4"
          style={{ backgroundColor: "yellow" }}
        >
          Mahakali Yatayat is located in Mahendranagar, Nepal.Thus Company is
          working in Bus Transportation business activities.
        </h4>
        <div className="w-100 py-2 d-lg-flex justify-content-around d-sm-block d-md-block">
          <div className="p-1 container ">
            <Image alt="image" src="/kiran.jpg" height={550} width={650} />
          </div>
          <div className="p-1 container ">
            <Image alt="image" src="/seat.jpg" height={550} width={650} />
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "yellow" }}
        className="pt-4 fw-bold rounded-4 mx-2"
      >
        <h2
          className="text-center rounded-4 fw-bold text-white"
          style={{ backgroundColor: "blue" }}
        >
          संक्षिप्त परिचय:{" "}
        </h2>
        <ol type="1">
          <li>
            नाम : श्री महाकाली सेती बस तथा मिनिबस व्यवसायी समितिबाट नाम संसोधन
            भै हाल महाकाली सेती यातायात व्यवसायी समिती कायम रहेको छ ।
          </li>
          <li>
            ठेगाना : भिमदत्त नगरपालिका वा.नं ४ महेन्द्रनगर, कंचनपुर नेपाल ।
          </li>
          <li> जि.प्र.द.नं. - ०६/२०३९/४०</li>
          <li>
            {" "}
            बिधान : २०३९ सालमा जिल्ला प्रशासन कार्यलय कंचनपुर बाट दर्ता भै
            कार्यान्वयन भयेको ।
          </li>
          <li>
            {" "}
            समेतिको स्थापना : - सवारी यातायात साधनका व्यवसायी हरु लाई संगठित गरि
            नियमित यातायात सेवा संचालन गर्नको लागि महाकाली सेती यातायात व्यवसायी
            समितिको स्थापना हुने छ । - यस समितिको प्रधान कार्यालय महेन्द्रनगर
            कंचनपुरमा रहने छ । आवस्यकता अनुसार अन्य ठाउमा शाखा, उपशाखा, बुकिङ्ग
            काउन्टर समेत राख्न सकिने छ ।
          </li>
          <li>
            उद्देश्य : - नेपाल अधिराज्यका विभिन्न राजमार्ग र त्यस्तै अन्य सडकमा
            चल्ने सवारी यातायात साधनका सवारी धनीहरुको व्यवसायमा सामुहिक हित,
            सुबिधा संरक्षण रेखदेख गर्ने मुख्य उद्देश्य रहनेछ । - यातायात संचालन
            भयेका ठाउहरुमा नियमित सेवा संचालन गरी यात्रु वर्गलाई सुबिधा प्रदान
            गर्ने छ । - सवारी यातायात साधनका व्यवसायीहरुलाई मुर्त रुपमा परिणत
            गरी हक, सुबिधामा सदैव सजग र तत्पर रहने । - सरकारी ऐन कानुन नियमको
            पुर्ण ख्याल् गरी पालना गर्ने । - यातायात सेवा क्षेत्रमा यात्रीहरुको
            सुबिधा माथी पनि समितिले पुर्ण ख्याल गरी आफ्नो नियम र कार्यक्रम बनाई
            लागू गर्न सक्नेछ । - सवारी धनी माथी पर्न आउने कठिनाई र बाधा अड्चन्को
            को सामाधान गर्ने गराउने तर्फ किर्याशिल रहने छ । - यो समितिको
            उद्देश्य मुनाफा रहित ( नन प्रोफिटेबल ) हुनेछ ।
          </li>
          <li>
            {" "}
            सवारी साधन संख्या : स्थापना कालमा ७ वटा सवारी साधनबाट संचालन भै हाल
            सानो ठुलो बस, मिनिबस, हायस किया, माइक्रो तथा गरी जम्मा ५३४ वटा सवारी
            साधन समितिको प्रधान कार्यकालमा दर्ता रही संचालन भैरहेका ।
          </li>
          <li>
            {" "}
            कर्मचारी संख्या : यस समितीको प्रधान कार्यलय र शाखा कार्यलयमा स्थायी,
            अस्थायी र करार गरि जम्मा ४९ जना र बुकिङ्ग कमिशन ऐजेण्ट ९५ जना रहेका
            छन ।
          </li>
          <li>
            यातायात सेवा संचालन क्षेत्र : सुदुर पश्चिमाञ्चलमा यातायात क्षेत्रमा
            स्थापित सबै भन्दा जेठो संस्थाका रुपमा मिति २०३९ माघ ७ गते बिधान
            स्वीकृत भई मिति २०४० बैशाख २९ गतेका दिन संस्था दर्ता प्रमाण पत्र बाट
            महाकाली सेती बस तथा मिनिबस व्यवसायी समितीको नामले ( महाकाली यातायात
            ) नेपाल अधिराज्यका प्रमुख स्थान लगायत सु.प. क्षेत्रका मोटर बाटो
            पुगेका सबै स्थानहरुमा भरपर्दो र सुरक्षित यातायात सेवा पुर्याउदै
            आयेको छ । जस्तै महेन्द्रनगर देखी काठमाडौं , काकडभिट्टा , हेटौडा ,
            पोखरा , नारायणगढ , बुटवल , प्युठान , दाङ्ग, सुर्खेत,कालिकोट ,
            नेपालगन्ज , बर्दिया गुलरिया , चिसापानी , टीकापुर, धनगढी , जोगबुडा ,
            कुर्मुले, डडेलधुरा , बगरकोट, चमडा , दिपायल , डोटी , आछाम साफेबगर ,
            मंगलसेन , बेतालमान्डाै , तिपाडा , मार्तडी बाजुरा , बैतडी , मेलौली ,
            दार्चुला, बझाङ बडगाउं , चैनपुर र कंचनपुर जिल्ला भित्री रुट (
            Gaddachauki , ब्रहमदेब , दोधारा चांदनी , पुर्नबास , बेलौरी , पचुई ,
            बेलडाडी , शिबनगर , गोकुलपुर , बिचफाटा ) र बैतडी र दार्चुला जिल्लाका
            भित्रि रुटमा सेवा संचालन हुन का साथै बैतडी देखि काठमाडौं, दार्चुला
            देखि काठमाडौं तथा पुर्नबास बेलौरी देखि काठमाडौं , पोखरा सम्म र
            महेन्द्रनगर देखि भारतको दिल्ली , देहरादुन , हरिद्वार , पन्जाब सम्म
            यातायात सेवा संचालन भैरहेको छ ।
          </li>
          <li>
            {" "}
            समाजिक क्षेत्र को सेवा : यस समितिले विभिन्न समाजिक क्षेत्र मा सहयोग
            पुर्‍याउदै आएको सर्वविदितै छ ।सोही सन्धर्भ मा महाकाली अञ्चल बाल
            अनाथलयका वालवालिकाको सहयोगका लागि प्रत्यक बस को चलान बाट प्रती
            यात्रु रु १ एकका दरले रकम संकलन गरि बस मालिकले पाउने रकम बाट कटौती
            हुने गरि प्रत्यक आ.व. मा उक्त संकलित रकम महाकाली अञ्चल बाल अनाथलयलाई
            उप्लब्ध गराउदै आएको र अन्य समाजिक तथा धार्मिक संघ , संस्था ,संगठन
            एवं असाय गरिव व्यक्तिहरुलाई सक्दो आर्थिक सहयोग गर्दै आएको छ ।
          </li>
          <li>
            {" "}
            यस समितिले हरेक बर्ष बैतड- डडेलधुरा - काठमाडौं , महेन्द्रनगर - धनगढी
            , पुर्नबास , बेलौरी , बेलडाडी र दार्चुला सम्म नेपाल सरकारको डाक
            ढुवानी सेवा गर्दै आईरहेको छ ।
          </li>
          <li>यश समितिले एक एम्बुलेन्स सेवा संचालन गर्दै आईरहेको छ ।</li>
          <li>
            {" "}
            सहुलियत सुबिधा : यश समितिबाट संचालित सवारी साधनहरुमा नेपाल सरकारले
            छुट्टयाएको अनुसारको कोटा अनुसार टिकट भाडामा छुट सुबिधा दिदै आएको र
            दैनिक रुपमा यात्रा गर्ने विभिन्न सरकारी एव गैर सरकारी संस्था र
            कार्यालयका कर्मचारीहरुलाई सम्बन्धित निकायको सिफारिसमा साविक भाडामा
            २५ प्रतिशत छुट दिई सेवा सुबिधा उपलब्ध गराईरहेको साथै एकल महिलाहरुलाई
            समाजमा केही सहयोग पुगोस् भन्ने अभिप्रायले लामो दुरीमा १/१ जना र छोटो
            दुरिमा यात्रा जतिसुकै भएतापनि २५ प्रतिशत भाडामा छुट को व्यवस्था
            मिलाईएको छ ।
          </li>
          <li>
            रोजगारी : यस व्यवसायबाट प्रत्यक्ष र अप्रत्यक्ष रुपमा १७३५ जना
            कर्मचारी मजदुरवर्गहरु ले रोजगारिको अवसर प्राप्त गरेका छन ।
          </li>
          <li>
            {" "}
            समितिको आफ्नै स्वामित्वमा रहेको २ दुई कट्टा क्षेत्रफल जग्गामा भावन
            निर्माण गरी जसमा २ सय राख्ने क्षमताको हल एक, कार्य समिती बैठक कक्ष
            एक र ११ एगार कोठा कार्यालय संचालन का लागी र ७ वटा कोठा पसल भाडामा
            संचालन का लागि उप्लब्ध छन ।
          </li>
          <li>
            {" "}
            यस समितिमा लामो समय सम्म अध्यक्ष पदमा रहि कार्य सम्पन्न गरि श्री
            दिनेश भणडारी ज्यु ३ पटक नेपाल यातायात व्यवसायी राष्ट्रिय महासंघ को
            अध्यक्ष पदमा रही नेतृत्वदायी भुमिका निर्वाह गर्नु भएको छ ।
          </li>
        </ol>
      </div>
      <div
        style={{ backgroundColor: "blue" }}
        className="pt-4 rounded-4 mx-2 fs-5"
      >
        <h2
          className="text-center rounded-4 mx-1 "
          style={{ backgroundColor: "white" }}
        >
          Our Facility
        </h2>
        <ul type="circle fw-bold ">
          <li className="text-white">
            {" "}
            Travel root available for all districts of the Nepal.
          </li>
          <ol
            type="dot"
            className="rounded-4"
            style={{ backgroundColor: "orange" }}
          >
            <li>Mahendrangar to Kathmandu</li>
            <li>
              Mahendranagar to Mechi-Kakarvitta/Illam/Jhapa/Birgunj/Biratnagar
            </li>
            <li>Mahendranagar to Pokhara/Muglin/Palpa/Syangja</li>
            <li>Mahendrangar to Butwal/Bhairawa/Narayangad/heatauda/</li>
            <li>
              Mahendrangar to
              Dadeldhura/Baitadi/Bajura/Bajhang/Darchula/Achham/Silgadhi{" "}
            </li>
            <li>Mahendrangar to Pyuthan/Surkhet/Kalikot</li>
          </ol>

          <li className="text-white">
            {" "}
            Travel root for the some part of India.
          </li>
          <ol className="rounded-4" style={{ backgroundColor: "orange" }}>
            <li>Mahendrangar to Delhi</li>
            <li>Mahendrangar to Deheradhun</li>
            <li>Mahendrangar to Punjab (Comming soon)</li>
          </ol>
          <li className="text-white">
            {" "}
            52 seater Suspension Super-Ac with attach washroom and slepeer.
          </li>
          <li className="text-white">
            {" "}
            46 seater Suspension Supper-Ac/Normal-Ac.
          </li>
          <li className="text-white">
            {" "}
            42 seater Suspension/Non-Suspension Deluxe/Mini coach etc.
          </li>
          <li className="text-white"> Ambulance Facility.</li>
          <li className="text-white">
            {" "}
            During accident, full treatment given to the injured passengers.
          </li>
          <li className="text-white"> Insurance facility.</li>
          <li className="text-white"> Online Ticketing</li>
        </ul>
      </div>
    </>
  );
};

export default aboutUs;
