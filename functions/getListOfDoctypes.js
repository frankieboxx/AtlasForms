exports = async function(arg){
  /* Can we see who it's running as? */
 const userCalling  = context.user

  /*Here we are explicty, programatically choosing which document types to expose to the frontend*/
  /*We have the user details so wee can factor in authorization too */
  /* Although MongoDB can be 'Dynamic' we can't just expose all of them */
  /* Partly because a newly created collection sould not just appear to all end users, better to have explicit security*/
  /* And partly because in App services you cannot enumerate the databases and collections in code without calling the
   REST Admin API */

  const docTypes = []
  
  /*Add Logic here to decide who sees what*/
  const sample_airbnb = { title: "Holiday Accomodations", namespace: "sample_airbnb.listingsAndReviews"}
  sample_airbnb.listViewFields = ["name","property_type","room_type","address.market","address.country"]
  docTypes.push(sample_airbnb);
  
  const sample_restaurants = { title: "Restaurants", namespace: "sample_restaurants.restaurants"}
  sample_restaurants.listViewFields = ["name","cuisine","bouroush","address.building","address.street"]
  docTypes.push(sample_restaurants);
  
  return docTypes;
};