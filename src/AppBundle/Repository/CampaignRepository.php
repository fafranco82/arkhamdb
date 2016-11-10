<?php 

namespace AppBundle\Repository;

class CampaignRepository extends TranslatableRepository
{
	function __construct($entityManager)
	{
		parent::__construct($entityManager, $entityManager->getClassMetadata('AppBundle\Entity\Campaign'));
	}
}