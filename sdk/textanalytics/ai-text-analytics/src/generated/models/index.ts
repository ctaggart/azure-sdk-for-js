/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */


import * as coreHttp from "@azure/core-http";

/**
 * An object representing an individual text document to be analyzed by the Text Analytics service.
 * The document contains a unique document ID, the full text of the document, and the language of
 * the document's text.
 */
export interface TextDocumentInput {
  /**
   * A unique, non-empty document identifier.
   */
  id: string;
  /**
   * The input text to process.
   */
  text: string;
  /**
   * (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en"
   * for English; "es" for Spanish etc. If not set, use "en" for English as default.
   */
  language?: string;
}

/**
 * Contains a set of input documents to be analyzed by the service.
 */
export interface MultiLanguageBatchInput {
  /**
   * The set of documents to process as part of this batch.
   */
  documents: TextDocumentInput[];
}

/**
 * An interface representing InnerError.
 */
export interface InnerError {
  /**
   * Error code. Possible values include: 'InvalidParameterValue', 'InvalidRequestBodyFormat',
   * 'EmptyRequest', 'MissingInputRecords', 'InvalidDocument', 'ModelVersionIncorrect',
   * 'InvalidDocumentBatch', 'UnsupportedLanguageCode', 'InvalidCountryHint'
   */
  code: InnerErrorCodeValue;
  /**
   * Error message.
   */
  message: string;
  /**
   * Error details.
   */
  details?: { [propertyName: string]: string };
  /**
   * Error target.
   */
  target?: string;
  /**
   * Inner error contains more specific information.
   */
  innerError?: InnerError;
}

/**
 * An interface representing TextAnalyticsError.
 */
export interface TextAnalyticsError {
  /**
   * Error code. Possible values include: 'InvalidRequest', 'InvalidArgument',
   * 'InternalServerError', 'ServiceUnavailable'
   */
  code: ErrorCodeValue;
  /**
   * Error message.
   */
  message: string;
  /**
   * Error target.
   */
  target?: string;
  /**
   * Inner error contains more specific information.
   */
  innerError?: InnerError;
  /**
   * Details about specific errors that led to this reported error.
   */
  details?: TextAnalyticsError[];
}

/**
 * An interface representing DocumentError.
 */
export interface DocumentError {
  /**
   * Document Id.
   */
  id: string;
  /**
   * Document Error.
   */
  error: TextAnalyticsError;
}

/**
 * Represents a warning encountered while processing a document.
 */
export interface TextAnalyticsWarning {
  /**
   * Error code. Possible values include: 'LongWordsInDocument', 'DocumentTruncated'
   */
  code: WarningCode;
  /**
   * Warning message.
   */
  message: string;
}

/**
 * if includeStatistics=true was specified in the request this field will contain information about
 * the document payload.
 */
export interface TextDocumentStatistics {
  /**
   * Number of text elements recognized in the document.
   */
  characterCount: number;
  /**
   * Number of transactions for the document.
   */
  transactionCount: number;
}

/**
 * Represents the confidence scores between 0 and 1 across all sentiment classes: positive,
 * neutral, negative.
 */
export interface SentimentConfidenceScores {
  positive: number;
  neutral: number;
  negative: number;
}

/**
 * The predicted sentiment for a given span of text. For more information regarding text sentiment,
 * see
 * https://docs.microsoft.com/azure/cognitive-services/Text-Analytics/how-tos/text-analytics-how-to-sentiment-analysis.
 */
export interface SentenceSentiment {
  /**
   * The sentence text.
   */
  text?: string;
  /**
   * The predicted Sentiment for the sentence. Possible values include: 'positive', 'neutral',
   * 'negative'
   */
  sentiment: SentenceSentimentLabel;
  /**
   * The sentiment confidence score between 0 and 1 for the sentence for all classes.
   */
  confidenceScores: SentimentConfidenceScores;
}

/**
 * An interface representing DocumentSentiment.
 */
export interface DocumentSentiment {
  /**
   * Unique, non-empty document identifier.
   */
  id: string;
  /**
   * Predicted sentiment for document (Negative, Neutral, Positive, or Mixed). Possible values
   * include: 'positive', 'neutral', 'negative', 'mixed'
   */
  sentiment: DocumentSentimentLabel;
  statistics?: TextDocumentStatistics;
  /**
   * Document level sentiment confidence scores between 0 and 1 for each sentiment class.
   */
  confidenceScores: SentimentConfidenceScores;
  /**
   * Sentence level sentiment analysis.
   */
  sentenceSentiments: SentenceSentiment[];
  /**
   * Warnings encountered while processing document.
   */
  warnings: TextAnalyticsWarning[];
}

/**
 * if includeStatistics=true was specified in the request this field will contain information about
 * the request payload.
 */
export interface TextDocumentBatchStatistics {
  /**
   * Number of documents submitted in the request.
   */
  documentCount: number;
  /**
   * Number of valid documents. This excludes empty, over-size limit or non-supported languages
   * documents.
   */
  validDocumentCount: number;
  /**
   * Number of invalid documents. This includes empty, over-size limit or non-supported languages
   * documents.
   */
  erroneousDocumentCount: number;
  /**
   * Number of transactions for the request.
   */
  transactionCount: number;
}

/**
 * An interface representing SentimentResponse.
 */
export interface SentimentResponse {
  /**
   * Sentiment analysis per document.
   */
  documents: DocumentSentiment[];
  /**
   * Errors by document id.
   */
  errors: DocumentError[];
  statistics?: TextDocumentBatchStatistics;
  /**
   * This field indicates which model is used for scoring.
   */
  modelVersion: string;
}

/**
 * A word or phrase identified as an entity that is categorized within a taxonomy of types. The set
 * of categories recognized by the Text Analytics service is described at
 * https://docs.microsoft.com/azure/cognitive-services/Text-Analytics/named-entity-types .
 */
export interface Entity {
  /**
   * Entity text as appears in the request.
   */
  text: string;
  /**
   * Entity type, such as Person/Location/Org/SSN etc
   */
  category: string;
  /**
   * Entity sub type, such as Age/Year/TimeRange etc
   */
  subCategory?: string;
  /**
   * Confidence score between 0 and 1 of the extracted entity.
   */
  confidenceScore: number;
}

/**
 * An interface representing DocumentEntities.
 */
export interface DocumentEntities {
  /**
   * Unique, non-empty document identifier.
   */
  id: string;
  /**
   * Recognized entities in the document.
   */
  entities: Entity[];
  /**
   * Warnings encountered while processing document.
   */
  warnings: TextAnalyticsWarning[];
  /**
   * if showStats=true was specified in the request this field will contain information about the
   * document payload.
   */
  statistics?: TextDocumentStatistics;
}

/**
 * An interface representing EntitiesResult.
 */
export interface EntitiesResult {
  /**
   * Response by document
   */
  documents: DocumentEntities[];
  /**
   * Errors by document id.
   */
  errors: DocumentError[];
  statistics?: TextDocumentBatchStatistics;
  /**
   * This field indicates which model is used for scoring.
   */
  modelVersion: string;
}

/**
 * Details about the specific substring in a document that refers to a linked entity identified by
 * the Text Analytics model.
 */
export interface Match {
  /**
   * If a well-known item is recognized, a decimal number denoting the confidence level between 0
   * and 1 will be returned.
   */
  confidenceScore: number;
  /**
   * Entity text as appears in the request.
   */
  text: string;
}

/**
 * A word or phrase identified as a well-known entity within a database, including its formal
 * (disambiguated) name and a link to the entity information within the source database.
 */
export interface LinkedEntity {
  /**
   * Entity Linking formal name.
   */
  name: string;
  /**
   * List of instances this entity appears in the text.
   */
  matches: Match[];
  /**
   * Language used in the data source.
   */
  language: string;
  /**
   * Unique identifier of the recognized entity from the data source.
   */
  dataSourceEntityId?: string;
  /**
   * URL for the entity's page from the data source.
   */
  url: string;
  /**
   * Data source used to extract entity linking, such as Wiki/Bing etc.
   */
  dataSource: string;
}

/**
 * An interface representing DocumentLinkedEntities.
 */
export interface DocumentLinkedEntities {
  /**
   * Unique, non-empty document identifier.
   */
  id: string;
  /**
   * Recognized well-known entities in the document.
   */
  entities: LinkedEntity[];
  /**
   * Warnings encountered while processing document.
   */
  warnings: TextAnalyticsWarning[];
  /**
   * if showStats=true was specified in the request this field will contain information about the
   * document payload.
   */
  statistics?: TextDocumentStatistics;
}

/**
 * An interface representing EntityLinkingResult.
 */
export interface EntityLinkingResult {
  /**
   * Response by document
   */
  documents: DocumentLinkedEntities[];
  /**
   * Errors by document id.
   */
  errors: DocumentError[];
  statistics?: TextDocumentBatchStatistics;
  /**
   * This field indicates which model is used for scoring.
   */
  modelVersion: string;
}

/**
 * An interface representing DocumentKeyPhrases.
 */
export interface DocumentKeyPhrases {
  /**
   * Unique, non-empty document identifier.
   */
  id: string;
  /**
   * A list of representative words or phrases. The number of key phrases returned is proportional
   * to the number of words in the input document.
   */
  keyPhrases: string[];
  /**
   * Warnings encountered while processing document.
   */
  warnings: TextAnalyticsWarning[];
  /**
   * if showStats=true was specified in the request this field will contain information about the
   * document payload.
   */
  statistics?: TextDocumentStatistics;
}

/**
 * An interface representing KeyPhraseResult.
 */
export interface KeyPhraseResult {
  /**
   * Response by document
   */
  documents: DocumentKeyPhrases[];
  /**
   * Errors by document id.
   */
  errors: DocumentError[];
  statistics?: TextDocumentBatchStatistics;
  /**
   * This field indicates which model is used for scoring.
   */
  modelVersion: string;
}

/**
 * An input to the language detection operation. This object specifies a unique document id, as
 * well as the full text of a document and a hint indicating the document's country of origin to
 * assist the text analytics predictive model in detecting the document's language.
 */
export interface DetectLanguageInput {
  /**
   * Unique, non-empty document identifier.
   */
  id: string;
  text: string;
  countryHint?: string;
}

/**
 * An interface representing LanguageBatchInput.
 */
export interface LanguageBatchInput {
  documents: DetectLanguageInput[];
}

/**
 * Information about the language of a document as identified by the Text Analytics service.
 */
export interface DetectedLanguage {
  /**
   * Long name of a detected language (e.g. English, French).
   */
  name: string;
  /**
   * A two letter representation of the detected language according to the ISO 639-1 standard (e.g.
   * en, fr).
   */
  iso6391Name: string;
  /**
   * A confidence score between 0 and 1. Scores close to 1 indicate 100% certainty that the
   * identified language is true.
   */
  confidenceScore: number;
}

/**
 * An interface representing DocumentLanguage.
 */
export interface DocumentLanguage {
  /**
   * Unique, non-empty document identifier.
   */
  id: string;
  /**
   * Detected Language.
   */
  detectedLanguage: DetectedLanguage;
  /**
   * Warnings encountered while processing document.
   */
  warnings: TextAnalyticsWarning[];
  /**
   * if showStats=true was specified in the request this field will contain information about the
   * document payload.
   */
  statistics?: TextDocumentStatistics;
}

/**
 * An interface representing LanguageResult.
 */
export interface LanguageResult {
  /**
   * Response by document
   */
  documents: DocumentLanguage[];
  /**
   * Errors by document id.
   */
  errors: DocumentError[];
  statistics?: TextDocumentBatchStatistics;
  /**
   * This field indicates which model is used for scoring.
   */
  modelVersion: string;
}

/**
 * Optional Parameters.
 */
export interface GeneratedClientEntitiesRecognitionGeneralOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * (Optional) This value indicates which model will be used for scoring. If a model-version is
   * not specified, the API should default to the latest, non-preview version.
   */
  modelVersion?: string;
  /**
   * (Optional) if set to true, response will contain input and document level statistics.
   */
  includeStatistics?: boolean;
}

/**
 * Optional Parameters.
 */
export interface GeneratedClientEntitiesLinkingOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * (Optional) This value indicates which model will be used for scoring. If a model-version is
   * not specified, the API should default to the latest, non-preview version.
   */
  modelVersion?: string;
  /**
   * (Optional) if set to true, response will contain input and document level statistics.
   */
  includeStatistics?: boolean;
}

/**
 * Optional Parameters.
 */
export interface GeneratedClientKeyPhrasesOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * (Optional) This value indicates which model will be used for scoring. If a model-version is
   * not specified, the API should default to the latest, non-preview version.
   */
  modelVersion?: string;
  /**
   * (Optional) if set to true, response will contain input and document level statistics.
   */
  includeStatistics?: boolean;
}

/**
 * Optional Parameters.
 */
export interface GeneratedClientLanguagesOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * (Optional) This value indicates which model will be used for scoring. If a model-version is
   * not specified, the API should default to the latest, non-preview version.
   */
  modelVersion?: string;
  /**
   * (Optional) if set to true, response will contain input and document level statistics.
   */
  includeStatistics?: boolean;
}

/**
 * Optional Parameters.
 */
export interface GeneratedClientSentimentOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * (Optional) This value indicates which model will be used for scoring. If a model-version is
   * not specified, the API should default to the latest, non-preview version.
   */
  modelVersion?: string;
  /**
   * (Optional) if set to true, response will contain input and document level statistics.
   */
  includeStatistics?: boolean;
}

/**
 * Defines values for ErrorCodeValue.
 * Possible values include: 'InvalidRequest', 'InvalidArgument', 'InternalServerError',
 * 'ServiceUnavailable'
 * @readonly
 * @enum {string}
 */
export type ErrorCodeValue = 'InvalidRequest' | 'InvalidArgument' | 'InternalServerError' | 'ServiceUnavailable';

/**
 * Defines values for InnerErrorCodeValue.
 * Possible values include: 'InvalidParameterValue', 'InvalidRequestBodyFormat', 'EmptyRequest',
 * 'MissingInputRecords', 'InvalidDocument', 'ModelVersionIncorrect', 'InvalidDocumentBatch',
 * 'UnsupportedLanguageCode', 'InvalidCountryHint'
 * @readonly
 * @enum {string}
 */
export type InnerErrorCodeValue = 'InvalidParameterValue' | 'InvalidRequestBodyFormat' | 'EmptyRequest' | 'MissingInputRecords' | 'InvalidDocument' | 'ModelVersionIncorrect' | 'InvalidDocumentBatch' | 'UnsupportedLanguageCode' | 'InvalidCountryHint';

/**
 * Defines values for WarningCode.
 * Possible values include: 'LongWordsInDocument', 'DocumentTruncated'
 * @readonly
 * @enum {string}
 */
export type WarningCode = 'LongWordsInDocument' | 'DocumentTruncated';

/**
 * Defines values for DocumentSentimentLabel.
 * Possible values include: 'positive', 'neutral', 'negative', 'mixed'
 * @readonly
 * @enum {string}
 */
export type DocumentSentimentLabel = 'positive' | 'neutral' | 'negative' | 'mixed';

/**
 * Defines values for SentenceSentimentLabel.
 * Possible values include: 'positive', 'neutral', 'negative'
 * @readonly
 * @enum {string}
 */
export type SentenceSentimentLabel = 'positive' | 'neutral' | 'negative';

/**
 * Contains response data for the entitiesRecognitionGeneral operation.
 */
export type EntitiesRecognitionGeneralResponse = EntitiesResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: EntitiesResult;
    };
};

/**
 * Contains response data for the entitiesLinking operation.
 */
export type EntitiesLinkingResponse = EntityLinkingResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: EntityLinkingResult;
    };
};

/**
 * Contains response data for the keyPhrases operation.
 */
export type KeyPhrasesResponse = KeyPhraseResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: KeyPhraseResult;
    };
};

/**
 * Contains response data for the languages operation.
 */
export type LanguagesResponse = LanguageResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: LanguageResult;
    };
};

/**
 * Contains response data for the sentiment operation.
 */
export type SentimentResponse2 = SentimentResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SentimentResponse;
    };
};
