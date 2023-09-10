export const LOGO = 
"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
// export const user_avatar = 
// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PE_d9489lEd42O4p_dq-hZWOWa9a13HY6Ko775w&amp;s";
export const user_avatar = 
"https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"

export const API_OPTIONS = {
  
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
        },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_Img_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/58126e35-739d-409f-9920-e213b5e2d640/US-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
  {identifier:"en", name:"English"}, 
  {identifier:"hindi", name:"Hindi"}, 
  {identifier:"spanish", name:"Spanish"},
];

// export const OPENAI_KEY = "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";

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;


