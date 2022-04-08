(function () {
  const selections = ['nope', 'like', 'superlike', 'lightining'];
  const items = [
    {
      id: 0,
      name: 'La Casa',
      age: 25,
      job: 'Amsterdam',
      images: ['images/069_720x480.jpg', 'images/101_1440.jpg', 'images/454_720x480.jpg'],
      distance: 25,
      description: 'A House with huge basement and beautiful garden',
      selection: 1
    },
    {
      id: 1,
      name: '4BHK Duplex',
      age: 28,
      job: 'Utrecht',
      images: ['images/636_720x480.jpg', 'images/658_720x480.jpg'],
      distance: 4,
      description: 'Lorem ipsum dolor sit amet, quo ad cibo viris legimus, simul delicata constituto per cu. Pro an commodo liberavisse, cu mutat sensibus tractatos est, animal similique ei nec. Et est molestie phaedrum, ut eam quot meliore. Usu hendrerit complectitur at, at iriure habemus facilisis sit. An eos probo graece.Propriae contentiones eu ius, pro eu ignota liberavisse disputationi, duo ea docendi consectetuer. Cum posse semper ea, ius invidunt qualisque scriptorem cu, ullum reprehendunt pro eu. Illud erant reformidans usu in. Ad vim quem choro iracundia. Ius in case mnesarchum.Duis signiferumque sed cu. Ut duo error congue intellegebat, fugit nostrud urbanitas ei has. Copiosae dissentias te eam, dicta efficiendi mea ad. Numquam persequeris te sea, ad populo graeci per, et mea aperiam noluisse interesset.Malorum abhorreant pri eu, no vidit quaeque mei, usu in dico meliore philosophia. Causae verterem pri in, te case suavitate nam. In ius ignota sanctus. Propriae repudiandae ad sit, gubergren ullamcorper usu ei. Ne vis fierent mediocritatem. Id nominati maluisset ius, soluta graece lobortis ut his, vocibus copiosae placerat est ad.Duo alia ferri impetus ei, deleniti scriptorem comprehensam ius an. Mea ne labore oblique adolescens. Ne velit albucius salutatus quo, cum iudico eripuit bonorum ad. Stet suscipit sea ad. Nec prompta suscipit mandamus at.'
    },
    {
      id: 2,
      name: 'Riverfront House',
      age: 21,
      job: 'Delft',
      images: ['images/702_720x480.jpg', 'images/744_720x480.jpg'],
      distance: 9,
      description: 'Looking to sell my house urgently. Serious buyers only!',
      selection: 0
    },
    {
      id: 3,
      name: 'Studio Apartment',
      age: 12,
      job: 'Haarlem',
      images: ['images/fullimage.jpg', 'images/636_720x480.jpg'],
      distance: 2455,
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita voluptatum sint facere vero dolorum fugit! Corporis aut a in ea debitis, itaque voluptas ducimus, beatae totam suscipit dicta tenetur modi.'
    },
    {
      id: 4,
      name: 'Studio Apartment, 100 sq. m.',
      age: 25,
      job: 'Maastricht',
      images: ['images/069_720x480.jpg', 'images/101_1440.jpg', 'images/454_720x480.jpg'],
      distance: 25,
      description: 'Studio apartment near the college'
    },
    {
      id: 5,
      name: 'Danish Residence, € 125.000',
      age: 28,
      job: 'Utrecht',
      images: ['images/636_720x480.jpg', 'images/658_720x480.jpg'],
      distance: 4,
      description: 'Lorem ipsum dolor sit amet, quo ad cibo viris legimus, simul delicata constituto per cu. Pro an commodo liberavisse, cu mutat sensibus tractatos est, animal similique ei nec. Et est molestie phaedrum, ut eam quot meliore. Usu hendrerit complectitur at, at iriure habemus facilisis sit. An eos probo graece.Propriae contentiones eu ius, pro eu ignota liberavisse disputationi, duo ea docendi consectetuer. Cum posse semper ea, ius invidunt qualisque scriptorem cu, ullum reprehendunt pro eu. Illud erant reformidans usu in. Ad vim quem choro iracundia. Ius in case mnesarchum.Duis signiferumque sed cu. Ut duo error congue intellegebat, fugit nostrud urbanitas ei has. Copiosae dissentias te eam, dicta efficiendi mea ad. Numquam persequeris te sea, ad populo graeci per, et mea aperiam noluisse interesset.Malorum abhorreant pri eu, no vidit quaeque mei, usu in dico meliore philosophia. Causae verterem pri in, te case suavitate nam. In ius ignota sanctus. Propriae repudiandae ad sit, gubergren ullamcorper usu ei. Ne vis fierent mediocritatem. Id nominati maluisset ius, soluta graece lobortis ut his, vocibus copiosae placerat est ad.Duo alia ferri impetus ei, deleniti scriptorem comprehensam ius an. Mea ne labore oblique adolescens. Ne velit albucius salutatus quo, cum iudico eripuit bonorum ad. Stet suscipit sea ad. Nec prompta suscipit mandamus at.'
    },
    {
      id: 6,
      name: '1RK Flat, € 100.000',
      age: 21,
      job: 'Delft',
      images: ['images/702_720x480.jpg', 'images/744_720x480.jpg'],
      distance: 9,
      description: 'Looking to sell my house urgently. Serious buyers only!',
      selection: 2
    },
    {
      id: 7,
      name: 'Luxurious apartment, 3BHK',
      age: 12,
      job: 'Haarlem',
      images: ['images/fullimage.jpg', 'images/636_720x480.jpg'],
      distance: 2455,
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita voluptatum sint facere vero dolorum fugit! Corporis aut a in ea debitis, itaque voluptas ducimus, beatae totam suscipit dicta tenetur modi.',
      selection: 2
    }
  ];

  let nope_list = [];
  let like_list = [];
  let super_like_list = [];
  let special_list = [];

  const dataProvider = (function* () {
    while (true) {
      yield *items;
    }
  })();

  function adjustSwipeItems() {
    const top = document.querySelector('.item--top');
    const next = document.querySelector('.item--next');
    next.classList.add('hidden');
    top.style.cssText = '';
    top.style.position = 'relative';
    const topR = top.getBoundingClientRect();
    top.style.position = '';
    next.classList.remove('hidden');
    top.style.top = next.style.top = `${topR.top}px`;
    top.style.width = next.style.width = `${topR.width}px`;
    top.style.height = next.style.height = `${topR.height}px`;
    top.onResize();
    next.onResize();
  }

  function updateSelection (id, selection) {
    const index = items.findIndex( house => house.id === parseInt(id));
    
    if(index < 0) return;

    const selectionIndex = selections.indexOf(selection);
    // console.log(`Index of house: ${index}, Selection type index: ${selectionIndex}`);
    items[index].selection = selectionIndex;
    updateCount();
  }

  function updateCount() {
    nope_list = [];
    like_list = [];
    super_like_list = [];
    special_list = [];

    for (const house of items) {
      if(typeof house.selection !== 'number')
        continue;
        
      switch(house.selection) {
        case 0: 
          nope_list.push(house.id); 
          break;
        case 1: 
          like_list.push(house.id); 
          break;
        case 2: 
          super_like_list.push(house.id); 
          break;
        case 3: 
          special_list.push(house.id); 
          break;
      }
    }

    document.querySelector('.selection-count-lightining').textContent = special_list.length;
    document.querySelector('.selection-count-superlike').textContent = super_like_list.length;
    document.querySelector('.selection-count-like').textContent = like_list.length;
    document.querySelector('.selection-count-nope').textContent = nope_list.length;
  }

  function updateCards(event) {
    const top = document.querySelector('.item--top');

    // console.log(`House Id: ${top.data.id}, selection type: ${event.detail}`)
    updateSelection(top.data.id, event.detail);
    
    window.ga && ga('send', 'event', `item-${top.data.id}`, event.detail);
    const next = document.querySelector('.item--next');
    const details = document.querySelector('myhomeapp-details');
    top.style.transform = '';
    top.selected = 0;
    top.data = next.data;
    next.data = dataProvider.next().value;
  }

  function hookupButtons() {
    const details = document.querySelector('.view--details');
    document.querySelectorAll('.control--like').forEach(btn => 
      btn.addEventListener('click', _ => {
        let p = Promise.resolve();
        if (!details.classList.contains('hidden')) {
          p = hideDetails();
        }
        p.then(_ => document.querySelector('.item--top').like(updateSelection));
      })
    );
    document.querySelectorAll('.control--nope').forEach(btn =>
      btn.addEventListener('click', _ => {
        let p = Promise.resolve();
        if (!details.classList.contains('hidden')) {
          p = hideDetails();
        }
        p.then(_ => document.querySelector('.item--top').nope());
      })
    );
    document.querySelectorAll('.control--superlike').forEach(btn => 
      btn.addEventListener('click', _ => {
        let p = Promise.resolve();
        if (!details.classList.contains('hidden')) {
          p = hideDetails();
        }
        p.then(_ => document.querySelector('.item--top').superlike());
      })
    );
    document.querySelectorAll('.control--lightining').forEach(btn => 
      btn.addEventListener('click', _ => {
        let p = Promise.resolve();
        if (!details.classList.contains('hidden')) {
          p = hideDetails();
        }
        p.then(_ => document.querySelector('.item--top').lightining());
      })
    );
  }

  function showDetails(event) {
    const swipelist = document.querySelector('.view--swipelist');
    const data = swipelist.querySelector('.item--top').data;
    window.ga && ga('send', 'event', `item-${data.id}`, 'details');
    const details = document.querySelector('.view--details');
    const detailsText1 = details.querySelector('.item__details');
    const detailsText2 = details.querySelector('.description');
    const detailsNav = details.querySelector('nav');
    const carousel = document.querySelector('myhomeapp-carousel');
    const image = document.querySelector('.view--swipelist .item--top picture');
    details.querySelector('myhomeapp-details').data = data;

    // Let’s do FLIP!
    const start = image.getBoundingClientRect();
    
    swipelist.classList.add('overlaid');
    details.classList.remove('hidden');

    const target = carousel.getBoundingClientRect();
    carousel.style.transformOrigin = 'top left';
    carousel.style.transform = `scaleX(${start.width/target.width}) scaleY(${start.height/target.height}) translate(${start.left - target.left}px, ${start.top - target.top}px)`;   
    return requestAnimationFramePromise()
      .then(_ => requestAnimationFramePromise())
      .then(_ => {
        carousel.style.transition = 'transform 0.15s ease-in-out';
        carousel.style.transform = 'initial';
        detailsText1.style.transform = 'initial';
        detailsText2.style.transform = 'initial';
        detailsNav.style.transform = 'initial';
        return transitionEndPromise(carousel);
      })
      .then(_ => {
        carousel.style.transform = '';
        carousel.style.transition = '';
        carousel.style.transformOrigin = '';
      });

  }

  function hideDetails(event) {
    const swipelist = document.querySelector('.view--swipelist');
    const details = document.querySelector('.view--details');
    const detailsText1 = details.querySelector('.item__details');
    const detailsText2 = details.querySelector('.description');
    const detailsNav = details.querySelector('nav');
    const carousel = document.querySelector('myhomeapp-carousel');
    const item = document.querySelector('.view--swipelist .item--top');
    const image = document.querySelector('.view--swipelist .item--top picture');

    item.selected = event && event.detail.selected || 0;

    const start = carousel.getBoundingClientRect();
    swipelist.classList.remove('overlaid');
    details.classList.add('hidden');
    const target = image.getBoundingClientRect();
    swipelist.classList.add('overlaid');
    details.classList.remove('hidden');

    item.style.overflow = 'visible';
    carousel.style.transformOrigin = 'top left';
    carousel.style.transition = 'transform 0.15s ease-in-out';
    return requestAnimationFramePromise()
      .then(_ => requestAnimationFramePromise())
      .then(_ => {
        carousel.style.transform = `scaleX(${target.width/start.width}) scaleY(${target.height/start.height}) translate(${target.left - start.left}px, ${target.top - start.top}px)`;   
        detailsText1.style.transform = '';
        detailsText2.style.transform = '';
        detailsNav.style.transform = '';
        return transitionEndPromise(carousel);
      })
      .then(_ => {
        carousel.style.transform = '';
        carousel.style.transition = '';
        carousel.style.transformOrigin = '';
        item.style.overflow = 'hidden';
        details.classList.add('hidden');
        swipelist.classList.remove('overlaid');
      });
  }

  function copyControls() {
    document.querySelectorAll('.view--details .control').forEach(btn => {
      const actionName = Array.from(btn.classList).find(name => /(like|nope|lightining)/.test(name));
      const svg = document.querySelector(`.view--swipelist .${actionName} svg`).cloneNode(true);
      btn.appendChild(svg);
    });
  }

  function installServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    navigator.serviceWorker.register('sw.js');
  }

  function init() {
    const top = document.querySelector('.item--top');
    top.data = dataProvider.next().value;
    top.addEventListener('swipe', updateCards);
    top.addEventListener('details', showDetails);
    const next = document.querySelector('.item--next');
    next.data = dataProvider.next().value;
    const details = document.querySelector('myhomeapp-details');
    details.addEventListener('dismiss', hideDetails);
    updateCount();
    copyControls();
    adjustSwipeItems();
    window.addEventListener('resize', adjustSwipeItems);
    hookupButtons();
    installServiceWorker();
  }
  document.addEventListener('DOMContentLoaded', init);
})();
