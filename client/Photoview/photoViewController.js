angular.module('app')
  .controller('PhotoViewController', function($scope) {
    console.log('app');
    $scope.images = [
      {title: 'Intelligentsia umami',
      rating: "5",
      src: 'https://s-media-cache-ak0.pinimg.com/736x/e9/e8/e8/e9e8e8e355583f14715a0a4f12a14386.jpg',
      artist: 'venmo neutra'},
      {title: 'Dreamcatcher cornhole',
      rating: "5",
      src: 'https://pbs.twimg.com/media/BdghUoeCMAAr_zQ.jpg',
      artist: 'Wolf art'},
      {title: 'Disrupt lo-fi mumblecore',
      rating: "5",
      src: 'http://img11.deviantart.net/0d5d/i/2013/206/5/c/part_of_your_no_by_tsaoshin-d6f5s39.png',
      artist: 'brooklyn banh mi'},
      {title: 'Meggings listicle fashion axe',
      rating: "5",
      src: 'http://www.neatorama.com/wp-content/uploads/2012/04/doublerainbow-500x500.jpg',
      artist: 'lo-fi four loko'},
      {title: 'Green juice banjo',
      rating: "5",
      src: 'http://www.susankdailey.com/images/Giclee_banjo.jpg',
      artist: 'sartorial pop-up'}
    ];

    $scope.selectImage = function(image) {
      $scope.selected = image;
    }
})