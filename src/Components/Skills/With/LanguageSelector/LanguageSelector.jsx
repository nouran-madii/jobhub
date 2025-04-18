import React, { useState } from 'react';

const languagesData = ['English', 'Arabic', 'French', 'Spanish', 'German'];

function LanguageSelector() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleAddLanguage = (language) => {
    if (!selectedLanguages.includes(language)) {
      setSelectedLanguages([...selectedLanguages, language]);
      setShowPopup(false); // إغلاق البوب أب بعد إضافة اللغة
    }
  };

  const handleRemoveLanguage = (language) => {
    const updatedLanguages = selectedLanguages.filter(lang => lang !== language);
    setSelectedLanguages(updatedLanguages);
  };

  return <>
    <div className='bg-white w-100 h-100 container p-3'>
      <h6 className='text-black fw-bold'>What languages do you know?</h6>

      {/* عرض اللغات المضافة */}
      <div className='d-flex gap-3 flex-wrap mt-4 w-100'>
        {selectedLanguages.map((lang, index) => (
          <div key={index} className='d-flex align-items-center justify-content-between border rounded px-3 py-2' style={{ minWidth: '120px' }}>
            <p className='text-black mb-0'>{lang}</p>
            <button
              className="fa-solid fa-xmark btn-sm btn ms-2 p-0"
              onClick={() => handleRemoveLanguage(lang)}
            ></button>
          </div>
        ))}
      </div>


      {/* زرار Add Language */}
      <div className='mt-3'>
        <button
          className='btn text-white fw-semibold'
          style={{ backgroundColor: '#746658' }}
          onClick={() => setShowPopup(true)}
        >
          Add Language
        </button>
      </div>

      {/* Popup لإضافة اللغات */}
      {showPopup && (
        <div className='position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50' style={{ zIndex: 1050 }}>
          <div className='bg-white p-4 rounded shadow' style={{ width: '400px' }}>
            <div className='d-flex justify-content-between align-items-center mb-3'>
              <h5 className='fw-bold'>Languages</h5>
              <button className='btn' onClick={() => setShowPopup(false)}>
                <i className='fa-solid fa-xmark'></i>
              </button>
            </div>

            {/* عرض اللغات مع زرار إضافة */}
            <div className='d-flex flex-column gap-2'>
              {languagesData.map((language, index) => (
                <div key={index} className='d-flex align-items-center border justify-content-between px-2 w-100'>
                  <p className='text-black pt-2'>{language}</p>
                  <button
                    className='btn btn-sm text-white' style={{ backgroundColor: '#746658' }}
                    onClick={() => handleAddLanguage(language)}
                  >
                    Add
                  </button>
                </div>
              ))}
            </div>
            <div className='mt-3'>
              <button
                className='btn text-white fw-semibold w-25'
                style={{ backgroundColor: '#746658' }}
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
}

export default LanguageSelector;
