const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");
      
const addCriticDetails = mapProperties({
  preferred_name: "critic.preferred_name",
  surname: "critic.surname",
  organization_name: "critic.organization_name",
});
        


//read record for reviewId. use first method to return first record
function read(reviewId){
return knex ("reviews as r")
.select("r.*")
.where ({review_id:reviewId})
.first();
}

      
//update or put request to use reduce properties, utilize helper function in utils

function update(updatedReview) {
  return knex("reviews")
    .select("*")
    .where({ review_id: updatedReview.review_id })
    .update(updatedReview);
}

function getReviewWithCritic(reviewId) {
  return knex("reviews as r")
    .join("critics as c", "r.critic_id", "c.critic_id")
    .select("*")
    .where({ review_id: reviewId })
    .first()
    .then((result) => {
      const updatedReview = addCriticDetails(result);
      return updatedReview;
    });
}


//delete a review record
function destroy(reviewId) {
          return knex("reviews")
          .where({review_id:reviewId})
          .del();
        }


module.exports = {

  read, 
  update,
  getReviewWithCritic,      
  delete: destroy,
  };