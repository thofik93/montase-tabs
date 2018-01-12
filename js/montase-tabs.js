+function($) {
	'use strict'

	var tabs 	= '[data-role="tabs-material"]'
	var navTabs = '.nav-tabs'

	var MontaseTabs = function(el) {
		$(el).on('click', tabs, this.show)
	}

	MontaseTabs.VERSION = '1.0.0[BETA]'

	MontaseTabs.AUTHOR = 'thofikwiranata15@gmail.com'

	MontaseTabs.prototype.show = function(e) {
		var $this                 = $(this)
    var $parent               = $this.closest(navTabs)
    var $nav                  = $parent.find('.tabs-material__list')
    var $parentContent        = $parent.next()
    var indexListActiveBefore = getIndexListActive()

    if(e) e.preventDefault()

    $nav.removeClass('active')
    $parentContent
      .find('.tabs-material-item')
      .removeClass('active')

    var $currentList = $this.parent()
    $currentList.addClass('active')

    var space = getSpace()

    animate($parent, $currentList, space)
    setContentActive($this)

    function getSpace() {
      var currentIndex = $nav.index($currentList)
      var space50 = getSpace50($parent)
      var $list = $parent
              .find('.tabs-material__list')
              .eq(indexListActiveBefore)

      var space = sumSpace()
      return space50 + space

      function sumSpace() {
        var totalSpace = 0
        for(var i = 0; i < currentIndex; i++) {
          totalSpace  += $nav.eq(i).outerWidth()
        }

        return totalSpace
      }

    }

    function getIndexListActive() {
      var index = $parent
              .find('.tabs-material__list.active')
              .index()
      return index
    }
	}

  MontaseTabs.prototype.setupTabsLine = function(parentNav) {
    var $parent = $(parentNav)
    // space50 => setengah space antara margin tabs dengan parent
    var space50 = getSpace50($parent)
    var $line = $parent.find('.tabs-material-line')
    var widthList = getFirstListWidth()
        
    $line
      .css({
        transform: 'translate3d(' + space50 + 'px,0,0)',
        width: widthList
    })

    function getFirstListWidth() { 
      return $parent
          .find('.tabs-material__list')
          .first()
          .width()
    }
  }

  function animate($parent, $currentList, space) {
    var $line = $parent.find('.tabs-material-line')
    var widthList = getWidth($currentList) 

    $line
      .css({
        transform: 'translate3d(' + space + 'px,0,0)',
        width: widthList
      })

    function getWidth($currentList) {
      return $currentList.width()
    }
  }

  function setContentActive($target) {
    var contentID = $target.attr('href')
    $(contentID)
        .addClass('active')
        .addClass('is-tiny')
        
    setTimeout(function(){
      $(contentID).removeClass('is-tiny')
    }, 50);
  }

	function getSpace50($parent) {
		var haveGutter = $parent.attr('data-tabs-gutter')

		var gutter = typeof haveGutter === 'undefined' ? 0 : haveGutter
		// space => setengah space antara margin tabs dengan parent
		var space = (getParentWidth() - getTabsWidth()) / 2
		return parseInt(space) + parseInt(gutter)

		function getParentWidth() {
			return $parent.outerWidth()
		}

		function getTabsWidth() {
			var $parentTabs = $parent.children('.tabs-material')
			return $parentTabs.outerWidth()
		}
	}

	// TABS MATERIAL PLUGIN DEFINITION
	// ========================
	function Plugin() {
		return this.each(function () {
			var $this   = $(this)
			var data    = $this.data('mt.montasetabs')
				    
			if (!data) $this.data('mt.montasetabs', (data = new MontaseTabs(this)))
			if (typeof option == 'string') data[option]
		})
	}

	$.fn.montasetabs             = Plugin
	$.fn.montasetabs.Constructor = MontaseTabs

	// TABS MATERIAL DATA-API 
	// ========================
	$(window).on('load', function () {
		$(navTabs).each(function () {
			var $this = $(this)
			MontaseTabs.prototype.setupTabsLine($this)
		})
	})

	$(document).on('click.mt.montasetabs.data-api', tabs, MontaseTabs.prototype.show)
}(jQuery)