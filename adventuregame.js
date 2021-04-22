const textElement = document.getElementById('text')
const optionButtons = document.getElementById('option-buttons')

let state = {}
var diceRoll = [];
  
//start the game at node 1
function startGame() {
    state = {}
    showTextNode(60)
    
}
//disable the second button if only one choice is available
function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtons.firstChild) {
        optionButtons.removeChild(optionButtons.firstChild)
    }
    textNode.options.forEach(option => {
        if (showOption(option)){
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtons.appendChild(button)
        }
    })
}
//display the text nodes within the containers & buttons
function selectOption(option) {
    const nextTextNodeId = option.nextText 
    
//if the text node greater than or equals to 0 start the game
    if (nextTextNodeId <= 0){
        return startGame()

    }
    showTextNode(nextTextNodeId)
}


//start the game with node 1
function showOption(option){
    return true
   }
//text nodes array
const textNodes = [
    {
    
       id: 1,
       text: 'You depart from your home leaving by the main road out of the villiage. You come to a fork in the road.. ',
       options: [
           {
               text: 'Go Left', 
               nextText: 2
           },
           {
               text: 'Go Right',
               nextText: 3
           }
       ]
    },
    {
        id: 2,
        text: 'You take the path to the left, after a small walk you enter a forest. You spot a boar running through the forest. What do you do?',
        options: [
            {
                text: 'You ignore the boar', 
                nextText: 4
            },
            {
                text: 'You hunt the boar',
                nextText: 5
            }
        ]
    },
    {
        id: 3,
        text: 'You take the road to the right. As you make your way up the broken path, you are approached by a hooded traveller.',
        options: [
            {
                text: 'You pass by, insiting you do not require his assistance', 
                nextText: 6
            },
            {
                text: 'You ask him if he knows about the beast terrorising your village',
                nextText: 7
            }
        ]
    },
    {
        id: 4,
        text: 'You ignore the boar and continue walking through the dense forest. Suddenly a storm rolls in! What will you do?',
        options: [
            {
                text: 'Seek shelter', 
                nextText: 8
            },
            {
                text: 'Head back home.',
                nextText: 9
            }
        ]
    },
    {
        id: 5,
        text: 'You hunt the boar. Whilst stalking the animal, you notice a large cave. You eventually hunt the boar successfully. You take the carcuss for food, when suddently a storm rolls in! What will you do?',
        options: [
            {
                text: 'Do not use the cave.', 
                nextText: 10
            },
            {
                text: 'You use the cave for shelter.',
                nextText: 11
            }
        ]
    },
    {
        id: 6,
        text: 'You wander aimlessly. Unable to find any signs of the beast.',
        options: [
            {
                text: 'You return home, tired, hungry and defeated. Restart your adventure?', 
                nextText: -1
            },
    
        ]
    },
    {
        id: 7,
        text: 'The hooded traveller tells you a story of a beast that resides within a cave to the East. He offers you a mystical Bow to help combat the beast',
        options: [
            {
                text: 'You decline the offer of the bow', 
                nextText: 12
            },
            {
                text: 'You accept the strangers gift.',
                nextText: 13
            }
        ]
    },
    {
        id: 8,
        text: 'You search for shelter but you are unable to find anything. Tired, cold and hungry you eventually freeze to death',
        options: [
            {
                text: 'You have died! Restart your adventure?', 
                nextText: -1
            },
        
        ]
    },
    {
        id: 9,
        text: 'You return home, unsuccessful in your quest.',
        options: [
            {
                text: 'Restart your adventure?', 
                nextText: -1
            },
        
        ]
    },
    {
        id: 10,
        text: 'You continue through the forest. You make it to the other side and find a village to spend the night. In the morning the inn keeper tells you a story of a beast that resides within a cave in the forest. What do you do with this information?',
        options: [
            {
                text: 'You ignore this information, choosing to trust your own tracking skills.', 
                nextText: 14
            },
            {
                text: 'You deside to investigate the cave the Innkeeper told you about.',
                nextText: 15
            }
        ]
    },
    {
        id: 11,
        text: 'You go into the cave and start a fire. You cook and eat the boar. After finishing your meal, you hear strange sounds coming from deeper inside the cave.',
        options: [
            {
                text: 'You investigate further into the cave', 
                nextText: 16
            },
        ]
    },
    {
        id: 12,
        text: 'The stranger tried to convince you to take the bow but you decline, insisting you have the right tools to deal with the issue at hand',
        options: [
            {
                text: 'Using the information you have been given, you make your way to the cave', 
                nextText: 18
            },
            
        ]
    },
    {
        id: 18,
        text: 'You arrive at the cave, you take a deep breath and head inside. As you enter you are confronted by a cave troll! With one swing you are gavely injured!',
        options: [
            {
                text: 'You run for your life, fleeing to the the nearest inn. You are unable to continue. Restart your adventure? ', 
                nextText: -1
            },
            
        ]
    },
    {
        id: 13,
        text: 'With your newly accuired bow on your back, you set off to the east to investigate the cave the stranger told you about.',
        options: [
            {
                text: 'You enter the cave', 
                nextText: 19
            },
            
        ]
    },
    {
        id: 19,
        text: 'You encounter a cave troll, remembering the gift the stranger gave you, you draw back and take aim. You strike the troll directly in the head and deliver a fatal blow!',
        options: [
            {
                text: 'Enter further into the cave', 
                nextText: 41
            },
            
        ]
    },
    
    {
        id: 41,
        text: 'You round a corner and come face to face with a HUGE fearsome dragon! ',
        options: [
            {
                text: 'Draw your bow and fire..', 
                nextText: 42
            },
            {
                text: 'Draw your bow and fire..', 
                nextText: 43
            },
        ]
    },
    {
        id: 43,
        text: 'GLANCING BLOW! The dragon becomes enraged and takes a huge breath!.. ',
        options: [
            {
                text: 'Attempt to dodge the attack..', 
                nextText: 44
            },
            {
                text: 'Attempt to dodge the attack..', 
                nextText: 45
            },
        ]
    },
    {
        id: 42,
        text: 'DIRECT HIT! The beast falls to the floor, lifeless and defeated! You take the head as a trophy of your victory and head back to the villiage',
        options: [
            {
                text: 'VICTORY! Restart your journey?', 
                nextText: -1
            },
            
        ]
    },
    {
        id: 44,
        text: 'DIRECT HIT! The beast falls to the floor, lifeless and defeated! You are wounded but alive! You take the head as a trophy of your victory and head back to the villiage',
        options: [
            {
                text: 'VICTORY! Restart your journey?', 
                nextText: -1
            },
            
        ]
    },
    {
        id: 45,
        text: 'You slip and lose your footing on the loose cave flooring. The Dragon lets out its molten breath and you are killed instantly!',
        options: [
            {
                text: 'DEFEATED! Restart your journey?', 
                nextText: -1
            },
            
        ]
    },
    {
        id: 14,
        text: 'You leave the village in search of the beast. You wander through the forest once again, stumbling upon a huge cave entrance you hear a HUGE roar from within',
        options: [
            {
                text: 'A sudden wave of fear takes over your body, You decide to leave and head home.', 
                nextText: 21
            },
            {
                text: 'You take a very deep breath and enter the cave!', 
                nextText: 16
            },
            
        ]
    },
    {
        id: 21,
        text: 'You return to the village, defeated and unable to face the truth that you did not possess the courage to help your village!',
        options: [
            {
                text: 'Restart your journey?', 
                nextText: -1
            },
            
            
        ]
    },
    {
        id: 16,
        text: 'You causiously investigate the cave further. As you make your way through the twisting system of darkness you come across what seems to be a trip wire trap. What do you do?',
        options: [
            {
                text: 'You try to disarm the trap.', 
                nextText: 22
            },
            {
                text: 'Try to sneak past the trap.', 
                nextText: 22
            },
            
            
        ]
    },
    {
        id: 22,
        text: 'You make it past the trap successfully! As you make it past, you enter a room which contains a chest which contains a sword. The sword has a strange glint to it. as you make your way through the cave system you come across a fork in the cave system which way do you go?',
        options: [
            {
                text: 'You go left', 
                nextText: 23
            },
            {
                text: 'You go right', 
                nextText: 24
            },
            
            
        ]
    },
    {
        id: 23, 
        text: 'You make your way left, the cave opens up to a huge room full of burnt corpses. In the distance you notice a shimmering shield. You could take the shield or leave it. What do you do?',
        options: [
            {
                text: 'Take the shield.', 
                nextText: 24
            },
            {
                text: 'Leave the shield.', 
                nextText: 24
            },
            
            
        ]
    },
    {
        id: 24, 
        text: 'You head right, as you round the corner the rumbling sound you heard before becomes louder. Eventually you spot a HUGE scaley Dragon. The stench of sulphur fills your nose.',
        options: [
            {
                text: 'You attempt to approach the Dragon undetected..', 
                nextText: 25 
        
            },
            {
                text: 'You attempt to approach the Dragon undetected..', 
                nextText: 26 
        
            },
           
            
            
        ]
    },
    {
        id: 25, 
        text: 'You approach undetected, you remove your newly aquired sword from its shieth and..',
        options: [
            {
                text: 'Attempt to kill the dragon..', 
                nextText: 27 
        
            },
            {
                text: 'Attempt to kill the dragon..', 
                nextText: 28 
        
            },
           
            
            
        ]
    },
    {
        id: 26, 
        text: 'You are detected! With an almighty ROAAR the dragon awakens! You have no choice but to fight! The creature takes a huge breath and spews molten flames in your direction..',
        options: [
            {
                text: 'Attempt dodge..', 
                nextText: 29 
        
            },
            {
                text: 'Raise your shield..', 
                nextText: 30 
        
            },
        ]
    },
    {
        id: 29, 
                text: 'With no time to think you try to dodge!',
                options: [
                    {
                        text: 'Attempt dodge..', 
                        nextText: 31 
                
                    },
                    {
                        text: 'Attempt dodge..', 
                        nextText: 32 
                
                    },
        ]
    }, 
    {
        id: 30, 
                text: 'You raise your shield, as the molten breath hits the panel, it begins to glow and absorbs all heat and energy from the breath. Seeing your oppertunity you stand! Shield still raised towards the beast you push forward until you are underneath its jaws. With a single blow you take your sword and run it through the neck, decapitating the beast!',
                options: [
                    {
                        text: 'Carve your trophy and head home, VICTORIOUS! Start again???', 
                        nextText: -1
                        
                    },
                        ]
    },
    {
        id: 31, 
                text: 'You do not make the dodge in time! The molten breath engulfs your body!',
                options: [
                    {
                        text: 'DEFEATED! Restart your journey?', 
                        nextText: -1 
                
                    },
                        ]
    }, 
    {
        id: 32, 
                text: 'You roll but some of the molten debris catches your leg, burning it badly. Once again the creature takes a breath in preperation for an attack. ',
                options: [
                    {
                        text: 'Raise your shield..', 
                        nextText: 33
                        
                    },
                    {
                        text: 'Raise your shield', 
                        nextText: 34
                        
                    },
                        ]
    },
    {
        id: 34, 
                text: 'The pain from your injuries make you too sluggish to maintain the shield in place. Weakened, the shield drops away and your body is engulfed in flames. ',
                options: [
                                    {
                        text: 'DEFEATED! Restart your journey?', 
                        nextText: -1
                        
                    },
                        ]
    },
    {
        id: 33, 
                text: 'Dispite the pain of your injuries, you raise your shield and maintain it there until the beast approaches! It gets close enough so that you may swing with your sword!',
                options: [
                                    {
                        text: 'You swing the final blow!', 
                        nextText: 35
                        
                    },
                        ]
    },
    {
        id: 35, 
                text: 'Your sword slices through the neck of the dragon, it flops to the floor. You claim your trophy and head back to the village, Injured but victorious!',
                options: [
                                    {
                        text: 'VICTORIOUS! Restart your journey?', 
                        nextText: 35
                        
                    },
                        ]
    },
    {
        id: 27, 
                text: 'You are detected! With an almighty ROAAR the dragon awakens! You have no choice but to fight! The creature takes a huge breath and spews molten flames in your direction..',
                options: [
                    {
                        text: 'Attempt dodge..', 
                        nextText: 36 
                
                    },
                    {
                        text: 'Attempt dodge..', 
                        nextText: 37 
                
                    },
        ]
    },
    {
        id: 36, 
                text: 'You manage to roll in time but you take a small amout of the molten debris to your leg! Once again the creature takes another breath..',
                options: [
                    {
                        text: 'Attempt dodge once more..', 
                        nextText: 38 
                
                    },
                    {
                        text: 'Attempt dodge once more..', 
                        nextText: 39 
                
                    },
        ]
    },
    {
        id: 38, 
                text: 'The final breath engulfs you in the molten breath! ',
                options: [
                    {
                        text: 'DEFEATED! Retart your journey?', 
                        nextText: -1 
                
                    },
                    
        ]
    },
    {
        id: 37, 
                text: 'You fail to move in time, as a result your body is taken by the dragons breath and you are incinerated instantly.',
                options: [
                    {
                        text: 'DEFEATED! Retart your journey?', 
                        nextText: -1 
                
                    },
                    
        ]
    },
    {
        id: 39, 
                text: 'In a last ditch effort, you roll again and this time get enough clearance to be able to gather your thoughts. You take your sword and with a final attempt, you throw the sword at the dragon',
                options: [
                    {
                        text: 'DIRECT HIT!', 
                        nextText: 40 
                
                    },
                    
        ]
    },

    {
        id: 40, 
                text: 'With a roar the beast falls limp onto the floor. Your sword is sticking out of the side of its head. Broken and injured you take the head a trophy and head back to the village.',
                options: [
                    {
                        text: 'VICTORIOUS! Retart your journey?', 
                        nextText: -1 
                
                    },
                    
        ]
    },

    {
        id: 60, 
                text: 'You are a buddying adventurer. Your village has been plagued with missing livestock, strange noises from deep within the nearby forest and surrounding areas. Tired of living in fear you decide to depart from the villiage in search of the terror that stalks your home.',
                options: [
                    {
                        text: 'Start your adventure!', 
                        nextText: 1 
                
                    },
                    
        ]
    },
]
    


startGame()