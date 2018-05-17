# TYTY

### URL

- Prototype link

  [Prototype](https://cs374-tyty.firebaseapp.com)

- Wizard's page link

  [Wizard's page](https://cs374-tyty.firebaseapp.com/admin.html)



### About

This prototype is a webpage to help KAIST foreign students order delivery food without speaking or calling in Korean.



### Page Flow

1. Category - Choose a category of food
2. Menu - Choose a menu of the chosen category
3. Brand - Choose a brand to order the chosen menu
4. Cart - This page shows what the user chose. The user can add other menus of the same brand
5. Location - Select a location that the user wants to get the food.
6. Payment - Select a payment method among cash or card.
7. Requesting Order - Wait for the order is requested to the store.
   1. If the user click the "cancel the order" button, go to page for cancelled order.
   2. If the order is rejected, go to page for rejected order.
8. Cooking(If the order is requested successfully) - Wait for the food is being cooked.
9. Delivered - Go to selected location and get the food.
10. Identifier - Use this identifier when the user finds the right deliverer.



- The page transition between  7 and 8 is done by clicking "Request" button of that order in wizard's page
- The page transition between 8 and 9 is done by clicking "Deliver" button of that order in wizard's page
- If the user doesn't look at the website, the push notification will notify the user that the food is being delivered.
