import $ from 'jquery';

export default () => {
  const block = $('.search-filter');

  if (!block.length) {
    return;
  }

  const saveBtn = block.find('.js-search-filter-action-save');
  const abortBtn = block.find('.js-search-filter-action-abort');

  if (!saveBtn.length || !abortBtn.length) {
    return;
  }

  const show = (action) => {
    const defaultBlock = block.find('.search-filter__block_default');
    const savingBlock = block.find('.search-filter__block_saving');

    if (!defaultBlock.length || !savingBlock.length) {
      return;
    }

    if (action === 'default') {
      savingBlock.fadeOut(250, () => {
        defaultBlock.fadeIn(250);
      });
    }

    if (action === 'saving') {
      defaultBlock.fadeOut(250, () => {
        savingBlock.fadeIn(250);
      });
    }
  };

  saveBtn.on('click', (e) => {
    e.preventDefault();
    show('saving');
  });

  abortBtn.on('click', (e) => {
    e.preventDefault();
    show('default');
  });
};
