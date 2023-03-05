exports.up = function (knex) {
	return knex.schema
		.createTable("entries", function (table) {
			table.uuid("id").primary();
			table.date("date");
			table.string("Question_1").notNullable();
			table.string("Answer_1").notNullable();
			table.string("Question_2").notNullable();
			table.string("Answer_2").notNullable();
			table.string("Question_3").notNullable();
			table.string("Answer_3").notNullable();
		})
		.createTable("entriesReview", function (table) {
			table.uuid("id").primary();
			table.date("date");
			table.string("Question_review_1").notNullable();
			table.string("Answer_review_1").notNullable();
			table.string("Question_review_2").notNullable();
			table.string("Answer_review_2").notNullable();
		})
		.createTable("quotes", function (table) {
			table.uuid("id").primary();
			table.string("text").notNullable();
		});
};

exports.down = function (knex) {
	return knex.schema
		.dropTable("entries")
		.dropTable("entriesReview")
		.dropTable("quotes");
};
