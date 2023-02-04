function bestFriend(friends) {
    let friend = '';
    for (let i = 0; i < friends.length; i++) {
        const element = friends[i];
        if (element.length > friend.length){
            friend = element;
        }
    }
    return friend;
}

const getFriend = bestFriend(['Raba', 'Nabil', 'Krishna', 'Deba', 'Nikunjo', 'Brojomohon']);
console.log(getFriend);