
const breedData = {
  dog: [
    { name: "Labrador", img: "assets/lab2.jpg", desc: "Labrador Retrievers are known for being friendly, outgoing, and intelligent dogs, making them popular family pets and working dogs. They are energetic and playful, requiring regular exercise and mental stimulation. Labs are also known for their loyalty, trainability, and adaptability to various roles like guide dogs, therapy dogs, and even hunting companions." },

    { name: "German Shepherd", img: "assets/german2.jpg", desc: "German Shepherds are large, muscular dogs known for their intelligence, loyalty, and protective nature. They are often used as working dogs in police and military roles due to their trainability and courage. They have a distinctive appearance with erect ears, a long, bushy tail, and a double coat that can be medium or long." },
    
    { name: "Bulldog", img: "assets/bulldog2.jpg" , desc: "Bulldogs are a medium-sized breed known for their distinctive, wrinkled face, muscular build, and undershot jaw. They have a short, smooth coat that can come in various colors like fawn, brindle, or white. Bulldogs are generally friendly, loyal, and affectionate with their families, though they can be stubborn at times. "},

    { name: "Siberian Husky", img: "assets/husky.jpg", desc: "The Siberian Husky is a medium-sized working dog breed known for its striking appearance and endurance. They have a dense, double coat, erect ears, and a bushy tail, often with distinctive facial markings. Their eyes can be brown, blue, or even one of each color. Huskies are known for their intelligence, friendly nature, and ability to work in packs, pulling light loads over long distances. "
      
    },

    { name: "Golden Retriever", img: "assets/golden.jpg", desc: "Golden Retrievers are a popular breed known for their friendly, intelligent, and gentle nature. They are medium-large, muscular dogs with a distinctive golden coat, often described as lustrous and water-repellent. Their friendly expression, combined with their flowing movement, makes them easily recognizable and beloved family pets. "
    },

    { name: "Poodle", img: "assets/poodle.jpg", desc: "Poodles are known for their intelligence, curly coat, and elegant appearance. They come in three sizes: Standard, Miniature, and Toy. Poodles are considered highly trainable and active dogs, excelling in obedience and agility. While known for their distinctive haircuts, their intelligence and hypoallergenic qualities contribute to their popularity. "
    },

    { name: "Pug", img: "assets/pug2.jpg", desc: "Pugs are small, compact dogs with a distinctive wrinkled face, short muzzle, and curled tail. They are known for their playful, affectionate, and loyal nature, often displaying puppy-like antics even in adulthood. Their short, glossy coat comes in fawn or black. Despite their small size, they are surprisingly muscular and heavy, with a cobby build. "
    },

    { name: "Rottweiler", img: "assets/rottweiler.jpg", desc: "Rottweilers are large, muscular dogs known for their strength, loyalty, and protective nature. Originating in Roman times, they were initially used as herding and driving dogs. Today, they excel as family companions, guard dogs, and service animals, including police and search-and-rescue roles. They are intelligent and require firm, early training and socialization. "
    },

    { name: "Boxer", img: "assets/boxer.jpg", desc: "Boxers are known for their playful, energetic, and loyal nature. They are medium-to-large dogs with a muscular build, a distinctive square head, and a short, sleek coat that can be fawn or brindle in color. Boxers are intelligent, active, and make great family dogs due to their affectionate and protective nature, especially with children. "
    },

    { name: "Afghan Hound", img: "assets/afghanhound.jpg", desc: "The Afghan Hound is a tall, elegant sighthound known for its long, silky coat, distinctive topknot, and dignified demeanor. They are athletic and have a strong build, reflecting their history as a hunting dog in mountainous regions of Afghanistan. While they can be affectionate and playful with their families, they are also independent and can be aloof with strangers. "
    },

    { name: "Bernese Mountain", img: "assets/bern.jpg", desc: "Bernese Mountain Dogs are large, sturdy, and friendly dogs with a distinctive tricolor coat (black, white, and rust). They are known for their gentle and loyal nature, making them excellent family companions. Originally from Switzerland, they were bred for farm work, including pulling carts and herding cattle. "
    },

    { name: "Alaskan Malamute", img: "assets/alas.jpg", desc: "The Alaskan Malamute is a large, powerful, and ancient breed of dog, known for its wolf-like appearance and thick double coat. Originally bred as sled dogs in Alaska, they are recognized for their strength, endurance, and loyalty. These dogs are affectionate, playful, and generally good with families, though they require experienced owners due to their independent nature and need for strong leadership. "
    },

    { name: "Beagle", img: "assets/beagle.jpg", desc: "Beagles are small, sturdy hounds known for their keen sense of smell and friendly temperament. They are often used for hunting rabbits and hares, and are also popular as detection dogs and family pets. Beagles are generally healthy, but can be prone to ear infections and obesity. "
    },

    { name: "Chihuahua", img: "assets/chihuahua.jpg", desc: "Chihuahuas are a small breed known for their large personality. They are known for their distinctive features like large, round eyes, erect, pointy ears, and a deer or apple shaped head. They are typically compact and dainty, with a variety of coat colors and textures. Despite their small size, Chihuahuas are known for their boldness, intelligence, and long lifespans. "
    },

    { name: "Dachshund", img: "assets/dach.jpg", desc: "Dachshunds, also known as wiener dogs or sausage dogs, are a German breed characterized by their long, low bodies, short legs, and distinctive appearance. They come in two sizes, standard and miniature, and three coat types: smooth, longhaired, and wirehaired. Originally bred to hunt badgers, their name literally translates to badger dog. Dachshunds are known for their playful, courageous, and loyal personalities. "
    },

    { name: "Australian Shepherd", img: "assets/aus.jpg", desc: "Australian Shepherds are medium-sized herding dogs with a sturdy, slightly longer than tall build. They are known for their striking coat colors and patterns, including black, red, blue merle, and red merle, often with white and/or tan markings. Aussies have a medium-length, wavy double coat that is weather-resistant, and they may have naturally bobbed tails. They are intelligent, energetic, and highly trainable, excelling in activities like agility, obedience, and herding. "
    },

    { name: "Maltese", img: "assets/maltese.jpg", desc: "The Maltese is a small, elegant toy breed known for its long, silky white coat, black button nose, and friendly, affectionate temperament. They are intelligent, lively, and adaptable, making them well-suited to apartment living and a variety of households. Despite their small size, they possess a confident and playful personality, and while they can be independent, they thrive on companionship and affection from their families. "
    },

    { name: "Great Dane", img: "assets/dane.jpg", desc: "Great Danes are large, muscular dogs known for their gentle and friendly nature, earning them the nickname gentle giants. They are characterized by their massive size, rectangular heads, and short, sleek coats, which come in a variety of colors. Despite their imposing size, they are known for their playful and affectionate personalities, making them popular family pets. "
    },

    { name: "Border Collie", img: "assets/bordercollie.jpg", desc: "The Border Collie is a medium-sized, athletic, and agile herding dog breed known for its intelligence, energy, and strong work ethic. They are highly trainable and excel in various dog sports. Physically, they have a double coat (smooth or rough), and can be found in a variety of colors and patterns. "
    },

    { name: "Bichon Frise", img: "assets/bichon.jpg", desc: "Bichon Frises are small, sturdy dogs known for their fluffy, white, hypoallergenic coat and cheerful disposition. They are affectionate, playful, and intelligent, making them excellent companions for families and individuals alike. Their adaptable nature and eagerness to please also make them relatively easy to train"
    },

    { name: "American Eskimo", img: "assets/eskimo.jpg", desc: "The American Eskimo Dog, often called Eskie, is a small to medium-sized breed known for its striking white coat and friendly, intelligent nature. They are active, alert, and playful dogs, originally bred as watchdogs, and are generally good with families and children. Despite the name, they have no connection to the Inuit people or their culture, and are actually descendants of German Spitz dogs. "
    },

    { name: "English Cocker", img: "assets/cocker.jpg", desc: "The English Cocker Spaniel is a medium-sized, well-balanced dog known for its affectionate, cheerful, and biddable nature. They are energetic, sporting dogs with a strong hunting instinct, enjoying activities like searching, flushing, and retrieving upland game birds. Their long, silky coat requires regular grooming, and they need plenty of exercise to satisfy their energy levels. "
    },

    { name: "Pomeranian", img: "assets/pomeranian.jpg", desc: "Pomeranians are small, fluffy dogs with a foxy face and a lively, intelligent personality. They are known for their thick, double coat, which comes in a variety of colors, and their compact, well-built body. Despite their small size, they are known for their courage and confidence, often acting much larger than they are. They are also intelligent and trainable, making them popular as both watchdogs and companion animals. "
    },

    { name: "Basset Hound", img: "assets/hound.jpg", desc: "Basset Hounds are easily recognizable, medium-sized dogs known for their short legs, long ears, and droopy faces. They are gentle, friendly, and loyal companions, often described as low-key and easygoing. Basset Hounds are characterized by their long bodies, heavy bone structure, and distinctive wrinkled skin. "
    },

    { name: "Chow Chow", img: "assets/chow.jpg", desc: "The Chow Chow is a distinctive dog breed originating from China, known for its lion-like appearance, blue-black tongue, and thick double coat. They are often described as aloof, independent, and dignified, forming strong bonds with their families but not always displaying overt affection. Chow Chows can be reserved with strangers and may exhibit a guarding instinct, making early socialization crucial. "
    },

    { name: "St. Bernard", img: "assets/stbern.jpg", desc: "The Saint Bernard is a large, powerful dog breed known for its gentle nature and historical role in rescue work in the Swiss Alps. They are characterized by their massive head, drooping ears, and thick coat, which can be either short and dense or medium-long. While they can reach impressive sizes and weights, they are often referred to as gentle giants due to their calm and friendly temperament. "
    },

    { name: "Havanese", img: "assets/havanese.jpg", desc: "The Havanese is a small, sturdy dog breed originating from Cuba, known for its friendly, affectionate, and playful personality. They are characterized by a long, silky coat, either straight or curly, and a plumed tail carried over the back. Havanese are intelligent, easy to train, and enjoy being the center of attention. "
    },

    { name: "Newfoundland", img: "assets/nfdog.jpg", desc: "The Newfoundland, often called a Newfie,is a large, gentle, and powerfully built dog breed, known for its calm temperament and natural swimming ability. They are characterized by their thick, water-resistant double coat, which can be black, brown, or white and black (Landseer). Newfoundlands are known for their sweet disposition and strong bond with their families, making them excellent companions. "
    },

    { name: "Boston Terrier", img: "assets/boston.jpg", desc: "The Boston Terrier is a small, sturdy dog known for its distinctive tuxedo-like markings and friendly, intelligent nature. They are compact and well-proportioned with a short, smooth coat that is typically black, brindle, or seal with white markings. Boston Terriers are characterized by their square head, erect ears, short muzzle, and large, round eyes. "
    },

    { name: "Cairn Terrier", img: "assets/cairn.jpg", desc: "Cairn Terriers are small, sturdy dogs with a foxy expression, known for their hardy, independent, and tenacious nature, combined with a cheerful and loving disposition. They are typically 9 to 10 inches tall and weigh around 13-14 pounds, with a double coat that is shaggy on the outside and soft on the inside. Cairn Terriers are also known for their alert and intelligent nature, strong teeth, and large feet with thick pads. "
    },

    { name: "Brittany", img: "assets/brittany.jpg", desc: "The Brittany is a medium-sized gundog breed originating from France, known for its energetic and intelligent nature. They are a versatile breed, excelling in both hunting and as family companions. Brittanys have a distinctive appearance with a cobby body, a slightly rounded head, and high-set, triangular ears. Their coats are typically flat or wavy, feathered on the ears and legs, and come in colors like orange and white, liver and white, or tricolor. "
    },

    { name: "Sheltie", img: "assets/sheltie.jpg", desc: "The Shetland Sheepdog, or Sheltie, is a small, herding dog breed originating from the Shetland Islands, known for its intelligence, agility, and double coat. They are typically 13-16 inches tall and weigh between 14-20 pounds, with a long, straight, harsh coat that comes in sable, black, or blue merle, often with white markings. Shelties are known for their affectionate, family-friendly nature and are quick learners, excelling in obedience and agility. "
    },

    { name: "Doberman", img: "assets/doberman.jpg", desc: "Doberman Pinschers are known for their intelligence, loyalty, and protective nature. They are often described as fearless, confident, and energetic, making them excellent guard dogs. While they can be aloof towards strangers, they are typically affectionate and playful with their families. Early socialization and training are crucial for Dobermans to ensure they interact well with others. "
    },

    { name: "Shih Tzu", img: "assets/shih.jpg", desc: "Shih Tzus are small, sturdy dogs with long, flowing coats and a distinctive underbite. They are known for their playful, affectionate, and friendly personalities, making them popular companion animals. These dogs have a relatively low energy level and are well-suited for apartment living, but they do require regular grooming to maintain their beautiful coats. "
    },

    { name: "Cane Corso", img: "assets/corso.jpg", desc: "The Cane Corso is a large, muscular Italian mastiff breed known for its protective nature and dignified appearance. These dogs are intelligent, loyal, and require experienced owners due to their independent nature and need for early socialization and training. "
    },

  ],
  cat: [
    { name: "Persian Cat", img: "assets/persian2.jpg", desc: "Persian cats are known for their long, flowing coats, round faces, and short muzzles, giving them a distinctive and elegant appearance. They are a medium-sized breed, but their dense fur makes them appear larger. Persians also have large, expressive eyes that can be copper, blue, or even a mix of colors. Their personality is generally described as sweet, gentle, and calm, with a preference for a peaceful environment" },

    { name: "Maine Coon", img: "assets/maine2.jpg", desc: "The Maine Coon is a large, long-haired cat breed known for its impressive size, muscular build, and distinctive, bushy tail. They have a rectangular body, a broad chest, and large paws with tufts of fur between the toes. Their most striking features are their large, tufted ears and a long, flowing coat that is shorter on the shoulders and longer on the stomach and britches. They come in a variety of colors and patterns, including tabby, tortoiseshell, and solid colors" },

    { name: "Siamese", img: "assets/siamese.jpg", desc: "Siamese cats are a distinctive breed known for their striking appearance and lively personality. They are characterized by their pale body color with darker points (ears, face, paws, and tail) and striking blue eyes. Originally from Thailand (formerly Siam), they are intelligent, vocal, and highly social, demanding attention and interaction with their owners."},

    { name: "British Shorthair", img: "assets/british.jpg", desc: "The British Shorthair is a robust, medium-to-large cat breed known for its dense, plush coat, rounded features, and calm, easygoing personality. They are considered one of the oldest cat breeds, originating in Great Britain. British Shorthairs are popular for their affectionate nature and relatively low-maintenance grooming needs. "},

    { name: "Ragdoll", img: "assets/ragdoll.jpg", desc: "Ragdoll cats are large, gentle, and affectionate cats known for their striking blue eyes and semi-long, silky coat. They are characterized by their relaxed, floppy nature when held, which is where they get their name. Ragdolls come in various color and pattern combinations, including pointed, mitted, and bicolor. "},

    { name: "Sphynx", img: "assets/sphynx.jpg", desc: "The Sphynx cat is a breed known for its lack of fur, though they often have a fine, downy layer of hair that feels like warm peach skin. They are easily identified by their wrinkled skin, large ears, and lemon-shaped eyes. Despite their unique appearance, they are known for being affectionate, social, and playful companions. "},

    { name: "Abyssinian", img: "assets/aby.jpg", desc: "Abyssinian cats are known for their elegant, muscular build, ticked coat, and active, playful personalities. They are medium-sized with a distinctive wedge-shaped head, large ears, and almond-shaped eyes that can be gold, green, or hazel. Their short, close-lying coat has a ticked appearance due to bands of color on each hair, with the most common color being ruddy (reddish-brown). They are intelligent, social, and enjoy human interaction, making them great family pets. "},

    { name: "American Shorthair", img: "assets/short.jpg", desc: "The American Shorthair is a medium-to-large, muscular cat breed known for its dense, short coat and friendly, adaptable nature. They are characterized by a broad head, large round eyes, and a well-developed muzzle. Originally brought to North America as working cats to control rodents, they retain a strong hunting instinct, but are also known for being affectionate and easygoing family pets"},

    { name: "Burmese", img: "assets/burmese.jpg", desc: "Burmese cats are medium-sized, muscular cats known for their rounded features, short, silky coat, and affectionate, playful nature. They are often described as having a dog-like devotion to their owners and enjoy interacting with people. "},

    { name: "Exotic Shorthair", img: "assets/exotic.jpg", desc: "The Exotic Shorthair is a breed of domestic cat known for its round face, short nose, and thick, dense coat, resembling a lazy man's Persian. They are generally gentle, affectionate, and quiet, making them well-suited for indoor living and calm households. While they are playful, they are not overly energetic and enjoy cuddling and relaxing. "},

    { name: "Scottish Fold", img: "assets/scottish.jpg", desc: "Scottish Fold cats are known for their distinctive folded ears, a genetic mutation that gives them a unique, owl-like appearance. These medium-sized cats have round faces, large round eyes, and come in various colors and patterns. While their folded ears are their signature trait, this also makes them prone to certain health issues, particularly those affecting cartilage and bone development. "},

    { name: "Birman", img: "assets/birman.jpg", desc: "The Birman, also known as the Sacred Cat of Burma, is a long-haired, color-pointed domestic cat breed. They are known for their distinctive white paws (gloves and socks), striking blue eyes, and a silky coat. Birmans are also recognized for their affectionate and docile temperament, often described as gentle and quiet. "},

    { name: "Bombay", img: "assets/bombay.jpg", desc: "The Bombay cat is a sleek, muscular, medium-sized breed known for its glossy, black coat and striking copper or gold eyes, resembling a miniature black panther. Developed in the 1950s, they are known for being friendly, playful, and adaptable to various living situations. They are relatively low-maintenance in terms of grooming, but thrive on attention and interaction with their owners. "},

    { name: "Siberian", img: "assets/siberian.jpg", desc: "The Siberian cat is a large, semi-longhaired breed with a dense, triple-layered coat that is water-resistant and comes in various colors and patterns. They are known for their muscular build, round body shape, and powerful hindquarters, which contribute to their impressive jumping ability. Siberians are also known for their playful, intelligent, and affectionate nature, often described as dog-like in their loyalty. "},

    { name: "Russian Blue", img: "assets/russian.jpg", desc: "The Russian Blue is a naturally occurring cat breed, known for its distinctive silvery-blue coat and striking green eyes. They are generally intelligent, playful, and affectionate cats that form strong bonds with their families. While they can be shy around strangers, they are known to be devoted companions and generally get along well with children and other pets. "},

    { name: "Norwegian Forest", img: "assets/norwegian.jpg", desc: "The Norwegian Forest cat is a large, semi-longhaired breed known for its robust build, water-repellent double coat, and bushy tail. Originating in Norway, these cats are well-adapted to cold climates due to their thick, woolly undercoat and long, water-repellent guard hairs. They are intelligent, playful, and possess strong climbing abilities. "},

    { name: "Devon Rex", img: "assets/devon.jpg", desc: "The Devon Rex is a breed of domestic cat known for its distinctive curly coat, large ears, and pixie-like appearance. They are typically small to medium-sized with a muscular build. Devon Rexes are also known for their playful, affectionate, and intelligent personalities. "},

    { name: "Munchkin", img: "assets/munchkin.jpg", desc: "Munchkin cats are a breed known for their short legs, a result of a genetic mutation. They are generally medium-sized, with a long spine and a well-rounded chest. Despite their short legs, they are known for their playful and outgoing personalities. "},

    { name: "American Curl", img: "assets/curl.jpg", desc: "The American Curl is a medium-sized cat known for its distinctive curled-back ears. They are friendly, playful, and adaptable, making them great family pets. American Curls can be found in both short and long hair varieties and come in a wide range of colors and patterns. "},

    { name: "American Bobtail", img: "assets/bobtail.jpg", desc: "The American Bobtail is a medium-large, naturally occurring, short-tailed cat breed with a wild-looking appearance, known for its athletic build and playful, dog-like personality. They are characterized by a bobbed tail, which is typically 1-3 inches long, and a sturdy, muscular body. American Bobtails come in a variety of colors and patterns, with both short and long-haired varieties. "},

    { name: "Balinese", img: "assets/balinese.jpg", desc: "The Balinese cat is a long-haired breed known for its striking blue eyes, pointed coloration (darker ears, face, paws, and tail), and silky coat, which lacks an undercoat. Essentially, it's a long-haired version of the Siamese, sharing many of the same characteristics, including a slender body, wedge-shaped head, and large ears. Balinese cats are highly affectionate, intelligent, and vocal, known for their chatty nature and strong bonds with their families. "},

    { name: "Oriental Shorthair", img: "assets/oriental.jpg", desc: "The Oriental Shorthair is a sleek and elegant cat breed, closely related to the Siamese, known for its striking appearance and lively personality. They are characterized by their long, slender bodies, triangular heads, large ears, and almond-shaped eyes. These cats come in a wide array of colors and patterns, making each individual unique. Oriental Shorthairs are highly intelligent, social, and playful, forming strong bonds with their families. "},
 
    { name: "Chartreux", img: "assets/chartreux.jpg", desc: "The Chartreux is a French breed of domestic cat, known for its distinctive blue-gray coat, muscular build, and calm, affectionate personality. They are often described as cobby due to their medium-to-large, powerful bodies and relatively short limbs. Chartreux cats are also known for their intelligent, quiet nature and their tendency to bond closely with their families. "},

    { name: "Japanese Bobtail", img: "assets/japanese.jpg", desc: "The Japanese Bobtail is a breed of domestic cat known for its distinctive short, kinked tail, which resembles a rabbit's tail. They are generally medium-sized, muscular cats with a slender build. They are known for their playful, intelligent, and social nature, often greeting guests and enjoying interaction with their families. "},

    { name: "Turkish Angora", img: "assets/turkish.jpg", desc: "The Turkish Angora is a medium-sized cat breed known for its elegant, slender build, silky semi-longhaired coat, and striking almond-shaped eyes. Originating from the Ankara region of Turkey, they are considered a national treasure in their native country. Turkish Angoras are intelligent, playful, and affectionate, making them excellent companions. "},
   
    { name: "Ragamuffin", img: "assets/ragamuffin.jpg", desc: "Ragamuffin cats are large, long-bodied felines with a gentle and affectionate temperament. They are known for their plush, silky coats, which come in various colors and patterns, and their expressive, walnut-shaped eyes. Ragamuffins are generally calm, relaxed, and get along well with children and other pets, making them popular family companions."},
   
    { name: "Himalayan", img: "assets/himalayan.jpg", desc: "Himalayan cats are a breed known for their long, silky coat, striking blue eyes, and colorpoint markings, similar to Siamese cats, but with a Persian-like body. They are a medium to large breed, with a round, cobby body and a sweet, gentle temperament. They are a cross between Persian and Siamese breeds, hence the name Himalayan Persian or Colorpoint Persian. "},
   
    { name: "Turkish Van", img: "assets/turkvan.jpg", desc: "The Turkish Van is a distinctive, medium-to-large, semi-longhaired cat breed known for its unique coat pattern and love of water. Originating from Turkey, particularly the Van region, they are often called the swimming cat due to their playful fondness for water. They are characterized by a mostly white body with colored markings on the head and tail, and often have blue, amber, or odd-colored eyes. "},

    { name: "British Longhair", img: "assets/longhair.jpg", desc: "The British Longhair is a medium-to-large, muscular cat known for its long, dense, and luxurious coat. They are essentially the longhaired version of the British Shorthair, sharing the same gentle, affectionate, and calm temperament. These cats are known for being loyal, adaptable, and relatively low-maintenance, making them excellent companions. "},
  ]
};

function showBreeds(type) {
  const section = document.getElementById("breeds-section");
  const grid = document.getElementById("breedGrid");
  const title = document.getElementById("breed-title");

  title.innerText = `${type.charAt(0).toUpperCase() + type.slice(1)} Breeds`;
  grid.innerHTML = "";

  breedData[type].forEach(breed => {
    const card = document.createElement("div");
    card.className = "breed-card";
    card.innerHTML = `
      <img src="${breed.img}" alt="${breed.name}">
      <h4>${breed.name}</h4>
    `;
    card.onclick = () => showBreedModal(breed);
    grid.appendChild(card);
  });

  section.classList.remove("hidden");
  section.scrollIntoView({ behavior: "smooth" });
}

function showBreedModal(breed) {
  document.getElementById("breedModal").classList.remove("hidden");
  document.getElementById("modalImg").src = breed.img;
  document.getElementById("modalTitle").innerText = breed.name;
  document.getElementById("modalDesc").innerText = breed.desc;
}

function closeModal() {
  document.getElementById("breedModal").classList.add("hidden");
}

// Toggle between Dog and Cat tips
function toggleTips(type) {
  const dogTips = document.getElementById("dogTips");
  const catTips = document.getElementById("catTips");
  const dogBtn = document.getElementById("dogBtn");
  const catBtn = document.getElementById("catBtn");

  if (type === 'dog') {
    dogTips.classList.remove("hidden");
    catTips.classList.add("hidden");
    dogBtn.classList.add("active");
    catBtn.classList.remove("active");
  } else {
    catTips.classList.remove("hidden");
    dogTips.classList.add("hidden");
    catBtn.classList.add("active");
    dogBtn.classList.remove("active");
  }
}


// Accordion open/close logic
document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const body = header.nextElementSibling;
      const isVisible = body.style.display === "block";

      // Close all
      document.querySelectorAll(".accordion-body").forEach(b => b.style.display = "none");

      // Open clicked
      if (!isVisible) {
        body.style.display = "block";
      }
    });
  });
});