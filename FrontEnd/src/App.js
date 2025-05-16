import "./App.css";
import PopupCard from "./components/common/Card/PopupCard";

function App() {
  const cardData = {
    cardProps: {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=312&q=80",
      category: "DEVELOPMENTS",
      price: "$14.00",
      title: "2021 Complete Python Bootcamp From Zero to Hero in Python",
      rating: "5.0",
      students: "265.7K",
    },
    detailedProps: {
      title: "2021 Complete Python Bootcamp From Zero to Hero in Python",
      author: "Kevin Gilbert",
      authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: "5.0",
      ratingCount: "357,914",
      students: "265.7K",
      level: "Beginner",
      duration: "6 hour",
      price: "$14.00",
      oldPrice: "$26.00",
      discount: "56% OFF",
      learnList: [
        "Learn to use Python professionally, learning both Python 2 and Python 3!",
        "Create games with Python, like Tic Tac Toe and Blackjack!",
        "Learn to use Python for data analysis and visualization!",
      ],
    },
  };

  return (
    <div className="App">
      <div>
        <PopupCard
          cardProps={cardData.cardProps}
          detailedProps={cardData.detailedProps}
        />
      </div>
    </div>
  );
}

export default App;
